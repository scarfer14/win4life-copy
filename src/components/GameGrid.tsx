import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import slotGameImg from '@/assets/slot-game.jpg';
import pokerGameImg from '@/assets/poker-game.jpg';
import bingoGameImg from '@/assets/bingo-game.jpg';
import sportsGameImg from '@/assets/sports-game.jpg';

const categories = [
  {
    title: "Slots",
    description: "Spin to win with our exciting slot games",
    image: slotGameImg,
    gameCount: "50+ Games"
  },
  {
    title: "Table Games", 
    description: "Classic casino games like Poker and Blackjack",
    image: pokerGameImg,
    gameCount: "25+ Games"
  },
  {
    title: "Bingo",
    description: "Join the community and win big prizes",
    image: bingoGameImg,
    gameCount: "10+ Rooms"
  },
  {
    title: "Sports Events",
    description: "Bet on your favorite teams and events",
    image: sportsGameImg,
    gameCount: "Live Events"
  },
  {
    title: "Fish Games",
    description: "Underwater adventures with amazing rewards",
    image: slotGameImg,
    gameCount: "15+ Games"
  },
  {
    title: "Color Game",
    description: "Pick your colors and win instantly",
    image: bingoGameImg,
    gameCount: "24/7 Open"
  }
];

export const GameGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="bg-black/90 border-2 border-green-500 overflow-hidden group hover:shadow-green-500/25 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-40">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-gray-300 text-sm">{category.gameCount}</p>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                <Button 
                  variant="gaming"
                  className="w-full"
                  style={{
                    background: 'hsl(142, 69%, 45%)',
                    color: 'white',
                    fontWeight: '600'
                  }}
                  onClick={() => { window.location.href = "https://www.pots888.vip/client/signup/?referral=pp81614"; }}
                >
                  Play Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};