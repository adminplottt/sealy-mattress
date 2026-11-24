import { useState, useEffect } from 'react';
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
import ThankYouPage from './pages/ThankYouPage';

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPath = (currentPath || '').toLowerCase().replace(/\/$/, '');
  const isThankYouPage =
    cleanPath === '/thank-you' ||
    cleanPath === '/thankyou' ||
    cleanPath.endsWith('/thank-you') ||
    cleanPath.endsWith('/thankyou');

  const handleOpenClaimOffer = () => {
    setIsClaimModalOpen(true);
  };

  const handleCloseClaimOffer = () => {
    setIsClaimModalOpen(false);
  };

  const handleClaimSuccess = (leadData) => {
    try {
      if (leadData) {
        sessionStorage.setItem('sealy_lead', JSON.stringify(leadData));
      }
    } catch (e) {
      console.error(e);
    }
    setIsClaimModalOpen(false);
    navigate('/thank-you');
  };

  if (isThankYouPage) {
    return <ThankYouPage onNavigateHome={() => navigate('/')} />;
  }

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
      <ClaimOfferModal
        isOpen={isClaimModalOpen}
        onClose={handleCloseClaimOffer}
        onSuccess={handleClaimSuccess}
      />
    </div>
  );
}

export default App;
