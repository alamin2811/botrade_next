import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import React from 'react'
import HomeSectionTitle from '../HomeSectionTitle'

const OurPartners = () => {
  const partners = [
    "./assets/images/logo/investor_1.svg",
    "./assets/images/logo/investor_2.svg",
    "./assets/images/logo/investor_3.svg",
    "./assets/images/logo/investor_4.svg",
    "./assets/images/logo/investor_5.svg",
    "./assets/images/logo/investor_6.svg",
  ];

  return (
    <div className="mt-[-45px] pb-[56px] relative z-10">
      <ContainerWrapper>
        <HomeSectionTitle
          title="Our Partners"
          alignment="text-center"
          titleMaxW="[752px]"
          titleMargin="auto"
        />
        <p className="text-[18px] font-[500] text-[rgba(255,255,255,0.90)] mb-[50px] text-center leading-[150%] mt-[25px]">
          Working with industry leaders to build the future of decentralized finance
        </p>

        <div className="border-[1px] border-[rgba(255,255,255,0.12)] rounded-[30px]">
          <ul className="flex items-center justify-between">
            {partners.map((logo, index) => (
              <li
                key={index}
                className="w-1/6 relative investors-logo flex items-center justify-center px-[20px] py-[10px] h-[110px]"
              >
                <div
                    href="#"
                    className="flex items-center justify-center"
                  >
                    <span className="btn-icons !h-[40px]">
                      <span className="btn-icon my-[0px] flex items-center justify-center mt-[-15px] h-[27px]">
                        <img src={logo} alt={`partner-${index + 1}`} className='' />
                      </span>
                      <span className="btn-icon my-[0px] flex items-center justify-center mt-[-15px] h-[27px]">
                        <img src={logo} alt={`partner-${index + 1}`} className='' />
                      </span>
                    </span>
                  </div>
                
                {/* Gradient divider - hide for last item */}
                {index !== partners.length - 1 && (
                  <div
                    className="h-full w-[1px] absolute z-0 top-0 right-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.12) 48.93%, rgba(255, 255, 255, 0.02) 100%)",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default OurPartners;
