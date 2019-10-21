
from .CardTypes import Face, Suit
from .Card import Card
import random

class Deck():

    cards = []

    faces = [Face.TWO, Face.THREE, Face.FOUR, Face.FIVE, Face.SIX, Face.SEVEN, Face.EIGHT, Face.NINE, Face.TEN, Face.JACK, Face.QUEEN, Face.KING, Face.ACE]
    suits = [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE]

    def __init__(self):
        self.reset()
    
    def flop(self):
        return
    
    def turn(self):
        return
    
    def river(self):
        return

    def burn(self):
        return
    
    def reset(self):
        self.cards = []
        for f in self.faces:
            for c in self.suits:
                self.cards.append(Card(f,c))

    def shuffle(self):
        for i in range(len(self.cards)):
            swap = random.randrange(len(self.cards))
            self.cards[i], self.cards[swap] = self.cards[swap], self.cards[i]