import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import Link from 'next/link'
import React from 'react'

const FeatureSection = () => {
  const features = [
    {
      title: "AI Trading Pool",
      description: "AI-powered trading strategies with machine learning algorithms",
      apy: "120.50%",
      showAPY: true,
      strategy: "Automated trading with AI-driven market analysis",
      buttonText: "See Details",
      buttonLink: "/details",
      buttonDisabled: false,
    },
    {
      title: "Yield Optimisation Pool",
      description: "Optimized yield farming across multiple DeFi protocols",
      showAPY: false,
      strategy: "Dynamic yield optimization across DeFi ecosystems",
      buttonText: "Coming Soon",
      buttonLink: "#",
      buttonDisabled: true,
    },
    {
      title: "Funding Rate Arbitrage Pool",
      description: "Capitalize on funding rate differences across exchanges",
      showAPY: false,
      strategy: "Advanced arbitrage strategies on perpetual funding rates",
      buttonText: "Coming Soon",
      buttonLink: "#",
      buttonDisabled: true,
    },
  ];

  return (
    <div className="mt-[-145px] relative z-10">
      <ContainerWrapper>
        <div className="flex flex-wrap items-start justify-start mx-[-15px] xl:mx-[-10px]">
          {features.map((feature, i) => (
            <div key={i} className="px-[15px] xl:px-[10px] sm:w-full lg:w-1/2 w-1/3">
              <div
                className="py-[40px] px-[30px] xl:py-[25px] xl:px-[20px] rounded-[15px] mb-[30px] xl:mb-[20px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)",
                }}
              >
                {/* Title */}
                <h4 className="mb-[25px] xl:mb-[15px] text-white space-grotesk text-[24px] xl:text-[20px] font-[700]">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-[16px] font-[500] text-white mb-[28px] xl:mb-[20px]">
                  {feature.description}
                </p>

                {/* APY Box */}
                <div className="flex items-center justify-between gap-[10px] bg-[rgba(217,217,217,0.10)] h-[60px] rounded-[10px] px-[20px] py-[15px] mb-[30px] xl:mb-[15px]">
                  {feature.showAPY ? (
                    <>
                      <span className="space-grotesk text-[16px] font-[700] text-white">
                        Current APY
                      </span>
                      <span
                        className="space-grotesk text-[16px] font-[700]"
                        style={{
                          background:
                            "linear-gradient(96deg, #38FF3F 6.86%, #00BD94 97.02%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {feature.apy}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="h-[14px] bg-[rgba(255,255,255,0.10)] rounded-[50px] w-[100px]" />
                      <div className="h-[14px] bg-[rgba(255,255,255,0.10)] rounded-[50px] w-[72px]" />
                    </>
                  )}
                </div>

                {/* Strategy */}
                <h6 className="text-[14px] space-grotesk font-[500] uppercase text-white mb-[5px]">
                  Strategy:
                </h6>
                <p className="text-[16px] font-[500] text-white mb-[30px] xl:mb-[20px]">
                  {feature.strategy}
                </p>

                {/* Button */}
                <Link
                  href={feature.buttonLink}
                  className={`buy-btn hov-btn no-border cursor-pointer group rounded-[10px] h-[50px] w-full mx-auto px-[15px] flex items-center justify-center gap-[10px] capitalize text-center font-[600] text-[16px] sm:text[14px] space-grotesk lg:hidden
                    ${feature.buttonDisabled
                      ? "pointer-events-none bg-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.20)]"
                      : "bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] text-[#111]"}`}
                >
                  <span className="btn-hov-text">
                    <span className="btn-text">{feature.buttonText}</span>
                    <span className="btn-text">{feature.buttonText}</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default FeatureSection;
