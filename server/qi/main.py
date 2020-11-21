import websockets
from websockets.exceptions import ConnectionClosedOK, ConnectionClosedError
import asyncio
from GameManager import *
from GameMap import MAP_ENTRY_TYPE
from threading import Timer


class Conn:
    def __init__(self, conn, userName):
        self.conn = conn
        self.userName = userName

    async def send(self, msg):
        print(msg)
        try:
            await self.conn.send(msg)
        except ConnectionClosedOK:
            await remove(self)
        except ConnectionClosedError:
            await remove(self)
        except Exception:
            print("发送失败:%s " % msg)

    def check(self):
        try:
            return not self.conn.closed
        except Exception as e:
            print("检验失败:%s " % str(e))


async def handle(websocket, path):
    try:
        async for recv_msg in websocket:
            try:
                print("i received %s" % recv_msg)
                messages = recv_msg.split("::")
                msg_type = messages[0]
                msg = messages[1]
                print("msg %s" % msg)
                if msg_type == 'login':
                    await login(Conn(websocket, msg))
                elif msg_type == 'create':
                    await create(msg)
                elif msg_type == 'join':
                    msgs = msg.split(':')
                    await join(msgs[0], msgs[1])
                elif msg_type == 'search':
                    await websocket.send(MessageUtils.group_list(group_list(msg)))
                elif msg_type == 'group':
                    await websocket.send(MessageUtils.group(group_list(msg)[0]))
                elif msg_type == 'start':
                    await start(msg)
                elif msg_type == 'put':
                    msgs = msg.split(':')
                    await put(int(msgs[0]), int(msgs[1]), MAP_ENTRY_TYPE(int(msgs[2])), msgs[3])
                elif msg_type == 'exit':
                    msgs = msg.split(':')
                    await exit_group(msgs[0], msgs[1])
                elif msg_type == 'msg':
                    await msg_group(msg, websocket)
            except Exception as e:
                print(e)
    except ConnectionClosedError:
        try:
            await remove(Conn(websocket, websocket.userName))
        except AttributeError:
            pass

    except Exception as e:
        print(e)


def heartbeat():
    try:
        check_conn()
    except Exception as e:
        print(str(e))
    print('heartbeat')
    t = Timer(3, heartbeat)
    t.start()


def run():
    heartbeat()
    ser = websockets.serve(handle, "0.0.0.0", 12346)
    asyncio.get_event_loop().run_until_complete(ser)
    asyncio.get_event_loop().run_forever()


if __name__ == '__main__':
    run()
