import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import logo from '@/assets/win4life-logo.png';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onAgeVerified: () => void;
  onExit: () => void;
}

export const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({
  isOpen,
  onAgeVerified,
  onExit,
}) => {
  return (
    <Dialog open={isOpen} modal>
      <DialogContent 
        className="bg-gaming-dark border-primary border-2 rounded-xl p-8 max-w-md mx-auto"
      >
        <DialogHeader className="space-y-6 text-center">
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="WIN FOR Life Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm">
            <div className="bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
              21
            </div>
            <DialogDescription className="text-foreground text-sm leading-relaxed">
              GAMING FOR 21 YEARS OLD AND ABOVE ONLY. GAME RESPONSIBLY AND STAY IN CONTROL.
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 mt-8">
          <Button 
            onClick={onAgeVerified}
            variant="gaming"
            size="lg"
            className="w-full"
          >
            I'm 21+ years old
          </Button>
          
          <Button 
            onClick={onExit}
            variant="outline" 
            size="lg"
            className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            Exit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};