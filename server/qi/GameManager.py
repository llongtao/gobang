from Utils import MessageUtils
from game import Game

CONN_MAP = {}
GROUP_MAP = {}
USER_GROUP_MAP = {}


async def login(conn):
    if CONN_MAP.__contains__(conn.userName):
        await conn.send(MessageUtils.err("用户已存在"))
    else:
        conn.conn.userName = conn.userName
        CONN_MAP[conn.userName] = conn
        await conn.send(MessageUtils.group_list(group_list()))


async def create(userName):
    if userName not in CONN_MAP:
        return
    conn = CONN_MAP[userName]
    if not conn:
        return

    game = Game(conn)
    GROUP_MAP[game.id] = game
    USER_GROUP_MAP[userName] = game
    group = dict(game).copy()
    group['isHost'] = game.host == conn.userName
    await conn.send(MessageUtils.create_group(group))
    await send_all(MessageUtils.group_list(group_list()))


async def join(user_name, game_id):
    game = GROUP_MAP[game_id]
    conn = CONN_MAP[user_name]
    if not conn:
        return
    if not game:
        conn.send(MessageUtils.err("房间不存在"))
        return

    await game.join(conn)
    USER_GROUP_MAP[user_name] = game
    await game.send_all(MessageUtils.group(game))
    await send_all(MessageUtils.group_list(group_list()))


async def exit_group(user_name, game_id=None, group=None):
    if group:
        game = group
    else:
        if game_id in GROUP_MAP:
            game = GROUP_MAP[game_id]
        else:
            return
    if user_name in CONN_MAP:
        conn = CONN_MAP[user_name]
    else:
        return
    if not conn:
        return
    if not game:
        conn.send(MessageUtils.err("房间不存在"))
        return
    del USER_GROUP_MAP[user_name]
    game.exit_game(user_name)
    if game.isEmpty:
        del GROUP_MAP[game.id]
    else:
        await game.send_all(MessageUtils.group(game))
    await send_all(MessageUtils.group_list(group_list()))


async def send_all(msg):
    CONN_MAP.values()
    for conn in list(CONN_MAP.values()):
        await conn.send(msg)


def check_conn():
    CONN_MAP.values()
    for conn in list(CONN_MAP.values()):
        if not conn.check():
            try:
                print('remove %s' % conn.userName)
                remove(conn).send(None)
            except StopIteration:
                pass
            except Exception as e:
                print(str(e))


async def start(groupId):
    group = GROUP_MAP[groupId]
    await group.start()


async def put(x, y, player, groupId):
    group = GROUP_MAP[groupId]
    await group.put(x, y, player)


async def remove(conn):
    try:
        await exit_group(conn.userName, group=USER_GROUP_MAP[conn.userName])
    except KeyError:
        pass
    if conn.userName in CONN_MAP:
        del CONN_MAP[conn.userName]


def group_list(gid=None):
    if gid:
        if gid in GROUP_MAP:
            return [GROUP_MAP[gid]]
        else:
            return []
    return list(GROUP_MAP.values())


async def msg_group(msg, websocket):
    name = websocket.userName
    if name in USER_GROUP_MAP:
        group = USER_GROUP_MAP[name]
    else:
        return
    await group.send_all(MessageUtils.msg(name, msg))
