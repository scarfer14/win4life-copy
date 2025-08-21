import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import exactLogo from '@/assets/exact-logo.png';

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
        className="modal-gaming-bg modal-gaming-border p-8 max-w-sm mx-auto shadow-2xl"
        style={{ 
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8)',
          background: 'rgba(0, 0, 0, 0.95)'
        }}
      >
        <DialogHeader className="space-y-6 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src={exactLogo} 
              alt="WIN FOR Life Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-start space-x-3 text-left">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              21
            </div>
            <DialogDescription className="text-gray-300 text-sm leading-relaxed font-medium text-left">
              GAMING FOR 21 YEARS OLD AND ABOVE ONLY. GAME RESPONSIBLY AND STAY IN CONTROL.
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="space-y-3 mt-8">
          <Button 
            onClick={onAgeVerified}
            variant="gaming"
            size="lg"
            className="w-full py-3 text-base font-semibold"
            style={{
              background: 'hsl(142, 69%, 45%)',
              color: 'white',
              border: 'none'
            }}
          >
            I'm 21+ years old
          </Button>
          
          <Button 
            onClick={onExit}
            variant="gaming-outline" 
            size="lg"
            className="w-full py-3 text-base font-semibold"
            style={{
              background: 'transparent',
              color: 'hsl(45, 93%, 60%)',
              borderColor: 'hsl(45, 93%, 60%)'
            }}
          >
            Exit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};