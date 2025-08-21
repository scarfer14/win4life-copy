import React from 'react';
import { GameCard } from './GameCard';
import slotGameImg from '@/assets/slot-game.jpg';
import pokerGameImg from '@/assets/poker-game.jpg';
import bingoGameImg from '@/assets/bingo-game.jpg';
import sportsGameImg from '@/assets/sports-game.jpg';

const gameData = [
  {
    title: "Lightning Slots",
    description: "Experience the thrill of lightning-fast slot action with massive jackpots and bonus rounds.",
    imageUrl: slotGameImg,
    category: "Slots",
    playCount: "2000+"
  },
  {
    title: "Poker Masters",
    description: "Test your skills against players worldwide in this ultimate poker experience.",
    imageUrl: pokerGameImg,
    category: "Poker",
    playCount: "1500+"
  },
  {
    title: "Bingo Bonanza",
    description: "Join the fun with our exciting bingo games featuring huge prizes and community play.",
    imageUrl: bingoGameImg,
    category: "Bingo",
    playCount: "3000+"
  },
  {
    title: "Sports Betting",
    description: "Place your bets on your favorite teams and sports events with competitive odds.",
    imageUrl: sportsGameImg,
    category: "Sports",
    playCount: "5000+"
  },
  {
    title: "Fish Hunter",
    description: "Dive into the ocean depths and catch fish for amazing rewards in this action-packed game.",
    imageUrl: slotGameImg,
    category: "Arcade",
    playCount: "1200+"
  },
  {
    title: "Color Game",
    description: "Pick your lucky colors and win big in this exciting and colorful gaming experience.",
    imageUrl: bingoGameImg,
    category: "Lottery",
    playCount: "4500+"
  }
];

export const GameSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Featured Games
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameData.map((game, index) => (
            <GameCard 
              key={index}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              category={game.category}
              playCount={game.playCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};