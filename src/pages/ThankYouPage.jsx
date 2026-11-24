import { useEffect, useState } from 'react';

export default function ThankYouPage({ onNavigateHome }) {
  const [lead, setLead] = useState(null);

  useEffect(() => {
    document.title = 'Thank You | Sealy Posturepedic';
    window.scrollTo(0, 0);

    try {
      const saved = sessionStorage.getItem('sealy_lead');
      if (saved) {
        setLead(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }

    return () => {
      document.title = 'Sealy Mattress';
    };
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  const displayName = lead?.name?.trim() ? lead.name.trim() : null;

  return (
    <div className="min-h-screen bg-[#F4F5F0] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[480px] bg-white rounded-[10px] p-8 sm:p-12 shadow-lg border border-black/5 text-center flex flex-col items-center">
        {/* Brand Logo */}
        <img
          src="/images/footerlogo.png"
          alt="Sealy Posturepedic"
          className="w-[110px] sm:w-[130px] h-auto object-contain select-none mb-6"
        />

        {/* Checkmark Icon */}
        <div className="w-16 h-16 rounded-full bg-[#D7F0FF] flex items-center justify-center text-[#25364A] mb-5">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-orpheus text-3xl sm:text-4xl text-[#242424] font-medium select-none">
          Thank You{displayName ? `, ${displayName}` : ''}!
        </h1>

        <p className="mt-2 font-optima text-xs tracking-[1.5px] uppercase text-[#B0A774] font-medium select-none">
          Offer Claimed Successfully
        </p>

        {/* Message */}
        <p className="mt-4 font-optima text-sm text-[#4A5568] leading-relaxed max-w-[380px]">
          Upgrade to Sealy and enjoy an exclusive ₹10,000 exchange benefit on your new mattress.
        </p>

        {/* Back to Home Button */}
        <a
          href="/"
          onClick={handleHomeClick}
          className="mt-8 w-full max-w-[200px] h-[45px] bg-[#25364A] hover:bg-[#1d2b3b] active:scale-[0.99] text-white rounded-[8px] font-optima font-medium text-sm flex items-center justify-center transition-all cursor-pointer shadow-md"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
