import { MATTRESSES } from '../../data/mattresses';

export default function MattressCarouselSection({ onClaimOffer }) {
  return (
    <section id="range" className="relative w-full min-h-[560px] lg:min-h-[610px] bg-[#E9ECE8] overflow-hidden select-none scroll-mt-6">
      <div className="relative w-full max-w-[1440px] min-h-[560px] lg:min-h-[610px] mx-auto pt-[36px] lg:pt-[43px] pb-5 lg:pb-6">
        <div className="w-full px-4 sm:px-10 lg:px-12 flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-6 lg:gap-[70px]">
          <div className="figma-heading-2 w-full lg:w-[483px]">
            <h2 className="figma-heading-2-text select-none">
              Find your perfect
              <br />
              comfort.
            </h2>
          </div>

          <div
            className="w-full lg:w-[400px] flex-none order-1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              width: '400px',
              maxWidth: '400px',
              height: '56px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            <p className="w-full font-optima font-normal text-[14px] sm:text-[16px] leading-[24px] lg:leading-[28px] text-[#17212C]">
              Explore Sealy mattress families designed around different comfort and support preferences.
            </p>
          </div>
        </div>

        <div className="w-full mt-[24px] sm:mt-[30px] lg:mt-[55px] pl-4 sm:pl-10 lg:px-12">
          <div className="flex flex-row items-center gap-[16px] sm:gap-[20px] overflow-x-auto no-scrollbar scroll-smooth pr-4 sm:pr-10 lg:pr-12 pb-2">
            {MATTRESSES.map((mattress) => (
              <div
                key={mattress.id}
                className="figma-card-frame-2"
              >
                <div className="figma-card-frame-5">
                  <img
                    src={mattress.image}
                    alt={mattress.name}
                    loading="lazy"
                  />
                </div>

                <h3 className="figma-card-title select-none">
                  {mattress.name}
                </h3>

                <button
                  type="button"
                  onClick={onClaimOffer}
                  className="figma-btn-frame-36"
                  aria-label={`Get offer for ${mattress.name}`}
                >
                  <span className="figma-btn-text">
                    Get Your Offer
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
