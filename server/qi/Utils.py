import json


class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        from game import Game
        from game import GameStatus
        if isinstance(obj, Game):
            return dict(obj)
        if isinstance(obj, GameStatus):
            return str(obj.value)
        return json.JSONEncoder.default(self, obj)


class MessageUtils:

    @staticmethod
    def err(msg):
        return MessageUtils.to_json({'type': 'err', 'msg': msg})

    @staticmethod
    def group(group):
        return MessageUtils.to_json({'type': 'group', 'msg': group})

    @staticmethod
    def start_game(group):
        return MessageUtils.to_json({'type': 'start', 'msg': group})

    @staticmethod
    def pos(x, y, player):
        return MessageUtils.to_json({'type': 'player:%d' % player.value, 'msg': '%d:%d' % (x, y)})

    @staticmethod
    def create_group(group):
        return MessageUtils.to_json({'type': 'create', 'msg': group})

    @staticmethod
    def group_list(groupList):
        return MessageUtils.to_json({'type': 'groupList', 'msg': groupList})

    @staticmethod
    def to_json(obj):
        print(obj)
        return json.dumps(obj, cls=MyEncoder)

    @staticmethod
    def show(winName):
        return MessageUtils.to_json({'type': 'show', 'msg': winName})

    @staticmethod
    def msg(name, msg):
        return MessageUtils.to_json({'type': 'msg', 'msg': {'name': name, 'content': msg}})


class IdGen:
    _instance = None
    id = 10000

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            obj = object.__new__(cls)
            cls._instance = obj
        return cls._instance

    def next(self):
        self.id = self.id + 1
        return str(self.id)
