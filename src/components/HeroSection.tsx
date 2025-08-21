import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          <span className="bg-gaming-gradient bg-clip-text text-transparent">
            WIN FOR LIFE
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the ultimate gaming destination with exciting slots, poker, bingo, and sports betting. 
          Your chance to win big starts here!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
            Start Playing Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Games
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-card border-primary p-6 text-center">
            <div className="text-3xl font-bold text-gaming-gold mb-2">10,000+</div>
            <div className="text-foreground">Active Players</div>
          </Card>
          
          <Card className="bg-card border-primary p-6 text-center">
            <div className="text-3xl font-bold text-gaming-gold mb-2">₱50M+</div>
            <div className="text-foreground">Total Winnings</div>
          </Card>
          
          <Card className="bg-card border-primary p-6 text-center">
            <div className="text-3xl font-bold text-gaming-gold mb-2">24/7</div>
            <div className="text-foreground">Customer Support</div>
          </Card>
        </div>
      </div>
    </section>
  );
};