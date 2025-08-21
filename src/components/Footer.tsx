import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gaming-dark border-t border-primary py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
            21
          </div>
          <p className="text-foreground text-sm">
            Gaming for 21 years old and above only. Game responsibly and stay in control.
          </p>
        </div>
        
        <div className="space-y-2 text-xs text-muted-foreground">
          <p>© 2024 WIN FOR Life. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Responsible Gaming</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};