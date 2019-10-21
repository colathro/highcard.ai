#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""Tests for `pokerengine` package."""


import unittest

from pokerengine.Deck import Deck

class TestDeck(unittest.TestCase):
    """Tests for `pokerengine` package."""

    def setUp(self):
        """Set up test fixtures, if any."""

    def tearDown(self):
        """Tear down test fixtures, if any."""

    def test_000_initlen(self):
        deck = Deck()
        assert(len(deck.cards) == 52)

    def test_001_uniquecards(self):
        deck = Deck()
        for i in deck.cards:
            if deck.cards.count(i) is not 1:
                raise Exception()
    
    def test_002_shufflelen(self):
        deck = Deck()
        deck.shuffle()
        assert (len(deck.cards) == 52)
    
    def test_003_shufflerandom(self):
        deck = Deck()
        deck.shuffle()
    
    def test_004_burn(self):
        deck = Deck()
        card = deck.cards[1]
        deck.burn()
        assert (deck.cards[0] == card)
    
    def test_005_turn(self):
        deck = Deck()
        card = deck.cards[1]
        turn = deck.turn()
        assert (turn == card)
    
    def test_006_river(self):
        deck = Deck()
        card = deck.cards[1]
        river = deck.river()
        assert (river == card)

    def test_007_flop(self):
        deck = Deck()
        flop_actual = (deck.cards[1], deck.cards[2], deck.cards[3])
        flop = deck.flop()
        assert (flop_actual == flop)

    def test_008_dealcard(self):
        deck = Deck()
        deal_actual = deck.cards[0]
        deal = deck.deal_card()
        assert (deal == deal_actual)



    


