import React from "react";

const PerformanceSummary = () => {
  const columns = [
    [
      { label: "Starting Capital", value: "$1,000.00" },
      { label: "Current Capital", value: "$1,162.62" },
      { label: "Average Return", value: "0.07%", color: "#38FF3F" },
      { label: "Sortino Ratio", value: "2.950" },
      { label: "Std. Error", value: "4.64%" },
      { label: "Max Drawdown", value: "21.83%" },
      { label: "Largest Win", value: "5.27%", color: "#38FF3F" },
      { label: "Trades", value: "300" },
      { label: "Zero Returns", value: "0" },
    ],
    [
      { label: "Total Trading Days", value: "61" },
      { label: "Net Profit", value: "16.26%", color: "#38FF3F" },
      { label: "Avg Return (Winners)", value: "1.02%", color: "#38FF3F" },
      { label: "Calmar Ratio", value: "0.745" },
      { label: "Std. Error (Losses)", value: "2.28%" },
      { label: "Avg Drawdown", value: "6.95%" },
      { label: "Largest Loss", value: "-2.81%", color: "#FF1F1F" },
      { label: "Unique Tokens", value: "45" },
      { label: "Max Cons. Wins (days)", value: "4" },
    ],
    [
      { label: "Winning Days", value: "30" },
      { label: "Expected Annual Return", value: "128.78%", color: "#38FF3F" },
      { label: "Avg Return (Losers)", value: "-0.76%", color: "#FF1F1F" },
      { label: "Ulcer Index", value: "8.855" },
      { label: "Annual Std. Error", value: "88.64%" },
      { label: "Max Daily Return", value: "16.13%" },
      { label: "Hit Ratio", value: "46.67%" },
      { label: "Winners", value: "140" },
      { label: "Max Cons. Losses (days)", value: "6" },
    ],
    [
      { label: "Losing Days", value: "31", color: "#FF1F1F" },
      { label: "Avg Daily Return", value: "0.35%", color: "#38FF3F" },
      { label: "Sharpe Ratio", value: "1.453" },
      { label: "Ulcer Performance Index", value: "1.836" },
      { label: "Annual Std. Error (Losses)", value: "43.65%" },
      { label: "Max Daily Loss", value: "10.08%" },
      { label: "Payoff Ratio", value: "1.874" },
      { label: "Losers", value: "160" },
    ],
  ];

  return (
    <div className="relative z-10 rounded-[15px] px-[30px] pb-[10px] pt-[40px] bg-[rgba(255,255,255,0.05)] mb-[50px]">
      <div className="flex items-center justify-between gap-[10px] mb-[30px]">
        <h2 className="text-[24px] font-[700] space-grotesk mb-[5px] text-[#FFF]">
          Performance Dashboard
        </h2>
        <p className="text-[16px] font-[500] text-[rgba(255,255,255,0.50)] mb-0">
          Updated: 2025-09-28
        </p>
      </div>

      <div className="flex items-start justify-start mx-[-13px]">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="w-1/4 px-[13px]">
            <div className="bg-[rgba(255,255,255,0.05)] min-h-[420px] py-[25px] px-[20px] rounded-[15px] mb-[30px]">
              <ul className="my-[-15px]">
                {col.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-end justify-between gap-[5px] py-[7px]"
                  >
                    <span className="text-[14px] font-[500] text-[rgba(255,255,255,0.90)]">
                      {item.label}
                    </span>
                    <span
                      className="text-[16px] font-[700]"
                      style={{ color: item.color || "#FFF" }}
                    >
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceSummary;
