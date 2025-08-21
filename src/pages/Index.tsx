import React, { useState, useEffect } from 'react';
import { AgeVerificationModal } from '@/components/AgeVerificationModal';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { GameGrid } from '@/components/GameGrid';
import { Footer } from '@/components/Footer';
import realisticCasinoBg from '@/assets/realistic-casino-bg.jpg';

const Index = () => {
  const [showAgeModal, setShowAgeModal] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified age in this session
    const ageVerified = sessionStorage.getItem('ageVerified');
    if (ageVerified === 'true') {
      setShowAgeModal(false);
      setIsAgeVerified(true);
    }
  }, []);

  const handleAgeVerified = () => {
    setShowAgeModal(false);
    setIsAgeVerified(true);
    sessionStorage.setItem('ageVerified', 'true');
  };

  const handleExit = () => {
    window.location.href = 'https://google.com';
  };

  if (!isAgeVerified) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${realisticCasinoBg})` }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.75)' }}></div>
        <AgeVerificationModal 
          isOpen={showAgeModal}
          onAgeVerified={handleAgeVerified}
          onExit={handleExit}
        />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: `url(${realisticCasinoBg})` }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.75)' }}></div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <GameGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Index;