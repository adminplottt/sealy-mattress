import { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import TheSealyDifference from './components/sections/TheSealyDifference';
import MattressCarouselSection from './components/sections/MattressCarouselSection';
import AwardWinningSection from './components/sections/AwardWinningSection';
import HeritageSection from './components/sections/HeritageSection';
import ComfortSection from './components/sections/ComfortSection';
import SpinalAlignmentSection from './components/sections/SpinalAlignmentSection';
import OrthopedicResearchSection from './components/sections/OrthopedicResearchSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ExchangeOfferSection from './components/sections/ExchangeOfferSection';
import Footer from './components/layout/Footer';
import ClaimOfferModal from './components/common/ClaimOfferModal';

function App() {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  const handleOpenClaimOffer = () => {
    setIsClaimModalOpen(true);
  };

  const handleCloseClaimOffer = () => {
    setIsClaimModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F0] flex flex-col relative overflow-x-hidden">
      <HeroSection onClaimOffer={handleOpenClaimOffer} />
      <TheSealyDifference />
      <MattressCarouselSection onClaimOffer={handleOpenClaimOffer} />
      <AwardWinningSection />
      <HeritageSection onClaimOffer={handleOpenClaimOffer} />
      <ComfortSection onClaimOffer={handleOpenClaimOffer} />
      <SpinalAlignmentSection onClaimOffer={handleOpenClaimOffer} />
      <OrthopedicResearchSection onClaimOffer={handleOpenClaimOffer} />
      <TestimonialsSection />
      <ExchangeOfferSection onClaimOffer={handleOpenClaimOffer} />
      <Footer />
      <ClaimOfferModal isOpen={isClaimModalOpen} onClose={handleCloseClaimOffer} />
    </div>
  );
}

export default App;
