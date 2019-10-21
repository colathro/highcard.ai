
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
        self.burn()
        return (self.cards.pop(0), self.cards.pop(0), self.cards.pop(0))
    
    def turn(self):
        self.burn()
        return self.cards.pop(0)
    
    def deal_card(self):
        return self.cards.pop(0)

    def river(self):
        self.burn()
        return self.cards.pop(0)

    def burn(self):
        self.cards.pop(0)
    
    def reset(self):
        self.cards = []
        for f in self.faces:
            for c in self.suits:
                self.cards.append(Card(f,c))
        self.shuffle()

    def shuffle(self):
        for i in range(len(self.cards)):
            swap = random.randrange(len(self.cards))
            self.cards[i], self.cards[swap] = self.cards[swap], self.cards[i]