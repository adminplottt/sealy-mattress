import { useState, useEffect } from 'react';

const PREFERENCES = [
  'Back Support',
  'Memory Foam Comfort',
  'Soft & Plush Feel',
  'Firm Support',
  'Latex Comfort',
  'Cooler Sleep',
];

const CITIES = [
  'Select Your City',
  'Pune',
  'Mumbai',
  'Delhi NCR',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Ahmedabad',
  'Kolkata',
  'Other',
];

export default function ClaimOfferModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    preferences: ['Back Support'],
  });
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: numericValue }));

    if (isPhoneInvalid && (/^[6-9]\d{9}$/.test(numericValue) || numericValue.length === 0)) {
      setIsPhoneInvalid(false);
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone)) {
      setIsPhoneInvalid(true);
    } else {
      setIsPhoneInvalid(false);
    }
  };

  const togglePreference = (pref) => {
    setFormData((prev) => {
      const exists = prev.preferences.includes(pref);
      if (exists) {
        return {
          ...prev,
          preferences: prev.preferences.filter((p) => p !== pref),
        };
      }
      return {
        ...prev,
        preferences: [...prev.preferences, pref],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setIsPhoneInvalid(true);
      return;
    }
    setIsPhoneInvalid(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsPhoneInvalid(false);
    setFormData({
      name: '',
      phone: '',
      city: '',
      preferences: ['Back Support'],
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[590px] max-h-[92vh] overflow-y-auto bg-white rounded-[10px] p-6 sm:p-[40px] shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 rounded-full flex items-center justify-center text-[#242424]/60 hover:text-[#242424] hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center select-none">
            <div className="w-16 h-16 rounded-full bg-[#D7F0FF] flex items-center justify-center text-[#25364A] mb-5">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-orpheus text-3xl text-[#242424]">Offer Claimed Successfully!</h3>
            <p className="mt-3 font-optima text-sm text-[#25364A] max-w-[380px] leading-relaxed">
              Thank you, {formData.name || 'valued customer'}. Your exclusive ₹10,000 discount voucher has been generated. Our sleep specialist will contact you shortly.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-8 w-full max-w-[200px] h-[45px] bg-[#25364A] hover:bg-[#1d2b3b] text-white rounded-[10px] font-medium text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-[31px]">
            <h2 className="w-full font-orpheus font-medium text-2xl sm:text-[34px] leading-tight sm:leading-[42px] text-[#242424] select-none pr-8">
              Claim Your Exclusive Offer
            </h2>

            <div className="flex flex-col gap-4 sm:gap-[18px]">
              <div className="flex flex-col gap-1.5">
                <label className="font-optima font-normal text-[16px] leading-[18px] text-[#242424] select-none">
                  Name
                </label>
                <div className="h-[37px] border border-[#F2F2F2] rounded-[5px] flex items-center px-3 bg-white focus-within:border-[#25364A]">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter Your Full Name"
                    className="w-full font-inter font-normal text-[12px] leading-[12px] text-[#242424] placeholder:text-[#AFAFAF] outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-optima font-normal text-[16px] leading-[18px] text-[#242424] select-none">
                  Phone Number
                </label>
                <div
                  className={`h-[37px] border rounded-[5px] flex items-center px-3 bg-white transition-colors ${
                    isPhoneInvalid
                      ? 'border-red-500 focus-within:border-red-500'
                      : 'border-[#F2F2F2] focus-within:border-[#25364A]'
                  }`}
                >
                  <input
                    type="tel"
                    required
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    placeholder="Enter Your Phone Number"
                    className="w-full font-inter font-normal text-[12px] leading-[12px] text-[#242424] placeholder:text-[#AFAFAF] outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-optima font-normal text-[16px] leading-[18px] text-[#242424] select-none">
                  Your City
                </label>
                <div className="h-[37px] border border-[#F2F2F2] rounded-[5px] flex items-center px-3 bg-white focus-within:border-[#25364A] relative">
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full font-inter font-normal text-[12px] leading-[12px] text-[#242424] outline-none bg-transparent cursor-pointer appearance-none pr-6"
                  >
                    {CITIES.map((c, i) => (
                      <option key={i} value={i === 0 ? '' : c} disabled={i === 0} className="text-[#242424]">
                        {c}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 flex items-center text-[#969696]">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <label className="font-optima font-normal text-[16px] leading-[18px] text-[#242424] select-none">
                  Your Looking For
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-[10px]">
                  {PREFERENCES.map((pref) => {
                    const isSelected = formData.preferences.includes(pref);
                    return (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => togglePreference(pref)}
                        className={`h-[39px] rounded-[5px] border border-[#25364A] px-2 flex items-center justify-center text-center font-optima text-[10px] leading-[11px] transition-all duration-150 cursor-pointer select-none ${
                          isSelected
                            ? 'bg-[#25364A] text-white shadow-sm'
                            : 'bg-white text-[#25364A] hover:bg-[#25364A]/5'
                        }`}
                      >
                        {pref}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[45px] bg-[#25364A] hover:bg-[#1d2b3b] active:scale-[0.99] text-white rounded-[10px] font-inter font-medium text-[18px] leading-[22px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25364A]"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
