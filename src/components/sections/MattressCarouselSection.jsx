import { MATTRESSES } from '../../data/mattresses';

export default function MattressCarouselSection({ onClaimOffer }) {
  return (
    <section id="range" className="relative w-full min-h-[645px] bg-[#E9ECE8] overflow-hidden select-none scroll-mt-6">
      <div className="relative w-full max-w-[1278px] min-h-[645px] mx-auto pt-[43px] pb-12">
        <div className="w-full max-w-[1156px] mx-auto px-6 sm:px-10 lg:px-0 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-[70px]">
          <div className="w-full lg:w-[538.46px] flex flex-col items-start flex-none order-0">
            <h2
              className="w-full lg:w-[447px] lg:h-[68px] font-gotham text-2xl sm:text-3xl lg:text-[34px] leading-tight lg:leading-[68px] text-[#25364A] select-none whitespace-nowrap"
              style={{
                width: '447px',
                maxWidth: '100%',
                height: '68px',
                fontFamily: "'Gotham', sans-serif",
                fontStyle: 'normal',
                fontWeight: 325,
                fontSize: '34px',
                lineHeight: '68px',
                color: '#25364A',
              }}
            >
              Find your perfect comfort.
            </h2>
          </div>

          <div className="w-full lg:w-[400px] lg:max-w-[400px] lg:h-[56px] flex flex-col items-start flex-none order-1">
            <p className="w-full lg:w-[400px] lg:h-[56px] font-optima font-normal text-[15px] sm:text-[16px] leading-[26px] lg:leading-[28px] text-[#17212C]">
              Explore Sealy mattress families designed around different comfort and support preferences.
            </p>
          </div>
        </div>

        <div className="w-full mt-[30px] lg:mt-[55px] pl-6 sm:pl-10 lg:pl-[60px]">
          <div className="flex flex-row items-center gap-[20px] overflow-x-auto no-scrollbar scroll-smooth pr-6 sm:pr-10 lg:pr-[60px] pb-4">
            {MATTRESSES.map((mattress) => (
              <div
                key={mattress.id}
                className="w-[468px] h-[316px] bg-[#FFFFFF] rounded-[4px] flex-none shadow-sm flex flex-col justify-between overflow-hidden"
              >
                <div className="w-full h-[249px] overflow-hidden rounded-t-[4px] bg-[#F0F2EF]">
                  <img
                    src={mattress.image}
                    alt={mattress.name}
                    className="w-full h-full object-cover select-none transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="w-full h-[67px] px-[16px] flex flex-row items-center justify-between">
                  <h3 className="font-optima font-[550] text-[15px] sm:text-[16px] leading-[28px] text-[#000000] truncate max-w-[320px]">
                    {mattress.name}
                  </h3>

                  <button
                    type="button"
                    onClick={onClaimOffer}
                    className="w-[97px] h-[27px] bg-[#25364A] hover:bg-[#2d425b] active:bg-[#1c2938] rounded-[4px] flex items-center justify-center transition-colors duration-200 cursor-pointer flex-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#25364A]"
                  >
                    <span className="font-optima font-normal text-[10px] leading-[28px] text-white select-none whitespace-nowrap">
                      Get Your Offer
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
