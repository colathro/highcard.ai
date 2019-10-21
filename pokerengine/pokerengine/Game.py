# -*- coding: utf-8 -*-

"""Main module."""

class Game():

    players = []

    active_seat = 0

    active_pot = None

    active_deck = None

    def  __init__(self):
        return
    
    def start(self):
        if self.get_active_players() < 2:
            raise Exception('Not enough players in game. Please add an additional player.')
        

        return
    
    def get_active_players(self):
        return len(self.players)
    
    def add_player(self, player):
        self.players.append(player)
        return

    def take_turn(self, player):
        return

    def reset_pot(self):
        return


class Showdown():
    
    def __init__(self):
        return
