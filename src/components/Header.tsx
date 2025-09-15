import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import exactLogo from '@/assets/exact-logo.png';

export const Header: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <header className="bg-gaming-dark border-b border-primary p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={exactLogo} 
            alt="WIN FOR Life" 
            className="h-12 w-auto object-contain mr-4"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Login Dialog */}
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => { window.location.href = "https://www.pots888.vip/client/signup/?referral=pp81614"; }}
          >
            Login
          </Button>

          {/* Register Dialog */}
          <Button
            variant="gaming"
            onClick={() => { window.location.href = "https://www.pots888.vip/client/signup/?referral=pp81614"; }}
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};