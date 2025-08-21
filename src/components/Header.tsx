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
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="modal-gaming-bg modal-gaming-border">
              <DialogHeader>
                <DialogTitle className="text-white text-center text-lg">Login</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="username" className="text-gray-300">Username</Label>
                  <Input 
                    id="username"
                    className="bg-black border-green-500 text-white"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    className="bg-black border-green-500 text-white"
                    placeholder="Enter password"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-gray-300">Remember me</Label>
                </div>
                <Button 
                  variant="gaming" 
                  className="w-full"
                  style={{
                    background: 'hsl(142, 69%, 45%)',
                    color: 'white',
                    fontWeight: '600'
                  }}
                >
                  Login
                </Button>
                <p className="text-center text-xs text-gray-400">
                  Forgot Password? Please contact our online customer service.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Register Dialog */}
          <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
            <DialogTrigger asChild>
              <Button variant="gaming">
                Register
              </Button>
            </DialogTrigger>
            <DialogContent className="modal-gaming-bg modal-gaming-border">
              <DialogHeader>
                <DialogTitle className="text-white text-center text-lg">Register</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="reg-username" className="text-gray-300">Username</Label>
                  <Input 
                    id="reg-username"
                    className="bg-black border-green-500 text-white"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <Label htmlFor="reg-password" className="text-gray-300">Password</Label>
                  <Input 
                    id="reg-password"
                    type="password"
                    className="bg-black border-green-500 text-white"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <Label htmlFor="fullname" className="text-gray-300">Full Name</Label>
                  <Input 
                    id="fullname"
                    className="bg-black border-green-500 text-white"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-gray-300">Mobile</Label>
                  <Input 
                    id="mobile"
                    className="bg-black border-green-500 text-white"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div>
                  <Label htmlFor="referral" className="text-gray-300">Referral ID (Optional)</Label>
                  <Input 
                    id="referral"
                    className="bg-black border-green-500 text-white"
                    placeholder="Enter referral ID"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm text-gray-300">
                    I have read terms and conditions
                  </Label>
                </div>
                <Button 
                  variant="gaming" 
                  className="w-full"
                  style={{
                    background: 'hsl(142, 69%, 45%)',
                    color: 'white',
                    fontWeight: '600'
                  }}
                >
                  Register
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};