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
        """Test something."""
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
        deck1 = Deck()
        deck1.shuffle()
        if deck.cards == deck1.cards:
            raise Exception()

    


