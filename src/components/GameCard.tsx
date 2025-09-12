import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  playCount?: string;
}

export const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  playCount = "0"
}) => {
  return (
    <Card className="bg-card border-primary overflow-hidden group hover:shadow-gaming-glow transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span className="bg-gaming-dark bg-opacity-75 text-foreground text-xs px-2 py-1 rounded-full">
            {playCount}
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-foreground text-sm">{title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
        
        <Button 
          variant="gaming"
          size="sm" 
          className="w-full"
          onClick={() => { window.location.href = "https://www.pots888.vip"; }}
        >
          Play
        </Button>
      </div>
    </Card>
  );
};