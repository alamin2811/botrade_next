import React from "react";
import Slider from "react-slick";
import ContainerWrapper from "@/src/Component/Core/ContainerWrapper";
import HomeSectionTitle from "../HomeSectionTitle";

// Roadmap data (phases + list items)
const roadmapData = [
  {
    phase: "Phase 01",
    gradient: false,
    items: [
      "Game design document drafted",
      "Actual gameplay video release",
      "NFT airdrop",
    ],
  },
  {
    phase: "Phase 02",
    gradient: false,
    items: [
      "Community-only whitelisting round",
      "Game design document",
      "Development of NFT market",
      "Project White Paper",
      "Product rebranding",
    ],
  },
  {
    phase: "Phase 03",
    gradient: true,
    progressIcon: "./assets/images/icons/progress.png",
    items: [
      "Metaverse launch",
      "Concept created",
      "Development of NFT market",
      "Project White Paper",
    ],
  },
  {
    phase: "Phase 04",
    gradient: false,
    items: [
      "Advisors on board",
      "More than 20 partnerships formed",
      "NFT available in Opensea",
      "Global community",
    ],
  },
];

const Roadmap = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots flex justify-center mt-10 gap-3">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => <div className="dot-bar"></div>,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  // bullet helper
  const getBulletClass = (phase, index, total) => {
    if (phase === "Phase 04") {
      return "border-[2px] border-[rgba(255,255,255,0.25)]";
    }
    if (phase === "Phase 03" && index >= total - 2) {
      return "border-[2px] border-[rgba(255,255,255,0.25)]";
    }
    return "bg-[rgba(255,255,255,0.25)]";
  };

  return (
    <div className="relative z-10 mt-[-500px]">
      <ContainerWrapper>
        <div className="max-w-[450px] mx-auto mb-[40px]">
          <HomeSectionTitle
            title="Our future: AI Based Crypto Hedge Fund"
            alignment="text-center"
          />
        </div>

        <div className="overflow-hidden">
          <Slider {...settings}>
            {roadmapData.map((phase, index) => (
              <div key={index}>
                <div className="roadmap-card bg-[rgba(255,255,255,0.02)] backdrop-blur-[2.5px] relative rounded-[15px] overflow-hidden p-[20px] min-h-[345px]">
                  <img
                    src="./assets/images/shape/card-shape.png"
                    alt="shape"
                    className="absolute top-0 left-0 z-0"
                  />

                  {phase.progressIcon && (
                    <img
                      src={phase.progressIcon}
                      alt="progress"
                      className="absolute top-[25px] right-[25px] z-10 rotate360"
                    />
                  )}

                  <div className="relative z-20">
                    <h3
                      className={`text-[24px] uppercase font-bold space-grotesk mb-4 ${
                        phase.gradient
                          ? "bg-gradient-to-r from-[#38FF3F] to-[#00BD94] bg-clip-text text-transparent"
                          : "text-white"
                      }`}
                    >
                      {phase.phase}
                    </h3>
                    <ul className="text-[16px] font-[500] text-[rgba(255,255,255,0.90)]">
                      {phase.items.map((item, i) => (
                        <li key={i} className="mb-[14px] relative pl-[18px]">
                          <div
                            className={`h-[10px] w-[10px] rounded-full absolute left-0 top-[10px] ${getBulletClass(
                              phase.phase,
                              i,
                              phase.items.length
                            )}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ContainerWrapper>

      {/* Custom slick + dots styles */}
      <style jsx global>{`
        .slick-track {
          display: flex !important;
          gap: 30px;
        }
        .slick-slide {
          height: auto !important;
        }
        .custom-dots{
            background: rgba(255, 255, 255, 0.04);
            max-width: 470px;
            margin: auto;
            margin-top: 33px
        }
        .custom-dots li {
          width: 96px;
          height: 12px;
          border-radius: 5px;
          background: transparent;
          transition: all 0.3s ease;
        }
        .custom-dots li.slick-active {
          width: 180px;
          background: rgba(255, 255, 255, 0.1);
        }
        .custom-dots .dot-bar {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Roadmap;
