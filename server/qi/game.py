import random
from enum import IntEnum

from ChessAI import ChessAI
from GameMap import Map, CHESS_LEN, MAP_ENTRY_TYPE
from Utils import MessageUtils, IdGen


class GameStatus(IntEnum):
    NONE = 0,
    WAIT = 2,
    SELECT = 3,
    PLAYING = 4


class Game:

    def __init__(self, conn):
        self._black = conn
        self._white = None
        self.userList = [conn.userName]
        self.memberSum = 1
        self.status = GameStatus.WAIT
        self.host = conn.userName
        self.id = IdGen().next()
        self.useAI = False
        self.blackUser = conn.userName
        self.AI = None
        self.map = None
        self.winner = None
        self.player = MAP_ENTRY_TYPE.MAP_PLAYER_TWO
        self.AI = ChessAI(CHESS_LEN)

    @property
    def memberList(self):
        mem_list = []
        for name in self.userList:
            mem_list.append({'name': name, 'isMaster': self.host == name})
        return mem_list

    @property
    def isEmpty(self):
        return self.memberSum == 0

    async def start(self):
        self.status = GameStatus.PLAYING
        if self.memberSum == 1:
            self.useAI = True
            self.blackUser = self.host
            self.player = MAP_ENTRY_TYPE.MAP_PLAYER_ONE
        else:
            self.useAI = False
            self.blackUser = self._black.userName if random.randint(0, 1) == 1 else self._white.userName
            self.player = MAP_ENTRY_TYPE.MAP_PLAYER_TWO
        self.map = Map(CHESS_LEN, CHESS_LEN)
        await self.send_all(MessageUtils.start_game(self))

    async def put(self, x, y, playerType):
        if playerType != self.player:
            return
        self.map.click(x, y, playerType)
        await self.send_all(MessageUtils.pos(x, y, playerType))
        if self.AI.isWin(self.map.map, playerType):
            await self.win(playerType)
        else:
            self.player = self.map.reverseTurn(playerType)
            if self.useAI:
                await self.ai_put()

    async def ai_put(self):
        x, y = self.AI.findBestChess(self.map.map, self.player)
        self.map.click(x, y, self.player)
        await self.send_all(MessageUtils.pos(x, y, self.player))
        if self.AI.isWin(self.map.map, self.player):
            await self.win(self.player)
        self.player = self.map.reverseTurn(self.player)

    async def win(self, playerType):
        self.status = GameStatus.WAIT
        self.winner = playerType
        win = None
        if playerType == MAP_ENTRY_TYPE.MAP_PLAYER_ONE:
            win = self._black
        elif playerType == MAP_ENTRY_TYPE.MAP_PLAYER_TWO:
            win = self._white
        if win:
            win_name = win.userName
        else:
            win_name = '机器人'
        await self.send_all(MessageUtils.show(win_name))

    async def join(self, conn):
        if self.status != GameStatus.WAIT:
            await conn.send(MessageUtils.err("游戏进行中"))
            return
        if self.memberSum >= 2:
            await conn.send(MessageUtils.err("房间已满"))
            return

        if not self._black:
            self._black = conn
        elif not self._white:
            self._white = conn
        self.userList.append(conn.userName)
        self.memberSum = len(self.userList)

    def exit_game(self, user_name):
        if user_name not in self.userList:
            return
        self.userList.remove(user_name)
        if self.userList:
            self.host = self.userList[0]
        self.memberSum = len(self.userList)
        if self._black and self._black.userName == user_name:
            self._black = None
        elif self._white and self._white.userName == user_name:
            self._white = None
        self.status = GameStatus.WAIT

    async def send_all(self, msg):
        if self._black:
            await self._black.send(msg)
        if self._white:
            await self._white.send(msg)

    def group_change(self):
        group = self.__dict__.copy()
        self.send_all(MessageUtils.group(group))

    def keys(self):
        return ('id', 'host', 'status', 'memberSum', 'memberList', 'blackUser','useAI')

    def __getitem__(self, item):
        return getattr(self, item)
