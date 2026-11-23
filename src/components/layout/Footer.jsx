import { useState } from 'react';
import { GOOGLE_SHEET_URL } from '../../config';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setIsSubmitting(true);

    const payload = {
      name: '',
      email: trimmedEmail,
      phone: '',
      city: '',
      preferences: [`Get In Touch (${trimmedEmail})`],
      source: 'Get In Touch',
      timestamp: new Date().toISOString(),
    };

    if (GOOGLE_SHEET_URL) {
      try {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error('Error submitting Get In Touch email:', err);
      }
    }

    setIsSubmitting(false);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative w-full bg-[#F4F5F0] overflow-hidden py-10 lg:py-0 lg:h-[190px]">
        <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 sm:px-10 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-6">
          <div className="flex-none">
            <a href="/" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25364A] rounded">
              <img
                src="/images/footerlogo.png"
                alt="Sealy Posturepedic - Sleep Supported"
                className="w-[120px] sm:w-[139px] h-[90px] sm:h-[107px] object-contain select-none"
              />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-12 flex-none">
            <div className="w-full sm:w-[176px] flex flex-col justify-start">
              <h4 className="font-optima font-normal text-[14px] leading-[16px] text-[#000000] select-none">
                Location
              </h4>
              <p className="mt-[10px] font-optima font-normal text-[12px] leading-[14px] text-[#25364A]">
                Showroom No. 3, Ground Floor, ICC Tech Park, Tower A, Model Colony, Shivajinagar, Pune 411005
              </p>
            </div>

            <div className="w-full sm:w-[80px] flex flex-col justify-start">
              <h4 className="font-optima font-normal text-[14px] leading-[16px] text-[#000000] select-none">
                Contact
              </h4>
              <a
                href="tel:9623052151"
                className="mt-[12px] font-optima font-normal text-[12px] leading-[13px] text-[#25364A] hover:underline"
              >
                9623052151
              </a>
            </div>

            <div className="w-full sm:w-[140px] flex flex-col justify-start">
              <h4 className="font-optima font-normal text-[14px] leading-[16px] text-[#000000] select-none">
                Email
              </h4>
              <a
                href="mailto:Sealypune@gmail.com"
                className="mt-[12px] font-optima font-normal text-[12px] leading-[13px] text-[#000000] hover:underline truncate"
              >
                Sealypune@gmail.com
              </a>
            </div>
          </div>

          <div className="w-full max-w-[393px] flex-none">
            <h3 className="font-optima font-normal text-[22px] sm:text-[24px] leading-[27px] text-[#000000] select-none">
              Get In Touch
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-4 lg:mt-[17px] w-full max-w-[393px] h-[41px] border border-[#000000] rounded-[4px] relative bg-transparent"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your mail to get exclusive offer"
                className="absolute left-[8px] top-[12px] right-[92px] outline-none focus:outline-none focus:ring-0 border-0 bg-transparent placeholder:text-[#000000] text-[#000000] text-[12px] leading-[13px] font-optima"
                style={{
                  fontFamily: "'Optima', sans-serif",
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '13px',
                  color: '#000000',
                  outline: 'none',
                  boxShadow: 'none',
                  border: 'none',
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-[9px] top-[9px] w-[81px] h-[23px] rounded-none flex items-center justify-center transition-colors duration-200 cursor-pointer hover:bg-[#2e425a] active:bg-[#1c2938] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: '#25364A',
                  borderRadius: '0px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Optima', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '13px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </span>
              </button>
            </form>

            {subscribed && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[#25364A] select-none animate-fadeIn">
                <svg className="w-3.5 h-3.5 text-[#25364A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Optima', sans-serif",
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#25364A',
                  }}
                >
                  Thank you! We will get in touch with you soon.
                </span>
              </div>
            )}
          </div>
        </div>
    </footer>
  );
}
