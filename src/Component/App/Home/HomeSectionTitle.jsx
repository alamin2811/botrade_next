import React from "react";

const HomeSectionTitle = ({ title, subtitle, alignment, titleMaxW, titleMargin, }) => {
  return (
    <div className={`${alignment} max-w-${titleMaxW} ${titleMargin} section-title`}>
      {title && (
        <h2 className={`text-white space-grotesk uppercase leading-[130%] text-[40px] sm:text-[32px] font-[700] mt-[30px] lg:mt-[20px] md:mt-[10px]`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <span className={`text-[#12CFA7] space-grotesk text-[18px] xl:text-[16px] md:text-[16px] font-[700] uppercase`}>
          {subtitle}
        </span>
      )}
      
    </div>
  );
};

export default HomeSectionTitle;
