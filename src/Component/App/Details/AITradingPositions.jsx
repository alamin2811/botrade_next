import React from "react";

const AITradingPositions = () => {
  const positions = [
    {
      token: "TRUMP",
      type: "Long",
      amount: "10.97",
      openPrice: "7.543000",
      closePrice: "-",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "50 0.93%",
      typeColor: "#38FF3F",
      statusColor: "#38FF3F",
      pnlColor: "#38FF3F",
    },
    {
      token: "ENA",
      type: "Long",
      amount: "3002.00",
      openPrice: "0.782000",
      closePrice: "0.562900",
      status: "Closed",
      openDate: "9/27/2025, 12:10:54 AM",
      pnl: "-2.19%",
      typeColor: "#38FF3F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "WIF",
      type: "Long",
      amount: "397.00",
      openPrice: "0.299700",
      closePrice: "0.576900",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-2.27%",
      typeColor: "#38FF3F",
      statusColor: "#38FF3F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "FARTCOIN",
      type: "Long",
      amount: "5.00",
      openPrice: "7.543000",
      closePrice: "297.450000",
      status: "Closed",
      openDate: "9/27/2025, 12:10:54 AM",
      pnl: "-1.04%",
      typeColor: "#38FF3F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "UNI",
      type: "Short",
      amount: "88.00",
      openPrice: "1.847000",
      closePrice: "-",
      status: "Closed",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-1.00%",
      typeColor: "#FF1F1F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "TIA",
      type: "Short",
      amount: "10.97",
      openPrice: "0.140900",
      closePrice: "18.177000",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-0.61%",
      typeColor: "#FF1F1F",
      statusColor: "#38FF3F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "TAO",
      type: "Long",
      amount: "10.70",
      openPrice: "1.847000",
      closePrice: "7.543000",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-2.16%",
      typeColor: "#38FF3F",
      statusColor: "#38FF3F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "ETC",
      type: "Long",
      amount: "12.92",
      openPrice: "0.094200",
      closePrice: "7.757000",
      status: "Closed",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-2.24%",
      typeColor: "#38FF3F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
    
    {
      token: "TRUMP",
      type: "Long",
      amount: "10.97",
      openPrice: "7.543000",
      closePrice: "-",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "50 0.93%",
      typeColor: "#38FF3F",
      statusColor: "#38FF3F",
      pnlColor: "#38FF3F",
    },
    {
      token: "ENA",
      type: "Long",
      amount: "3002.00",
      openPrice: "0.782000",
      closePrice: "0.562900",
      status: "Closed",
      openDate: "9/27/2025, 12:10:54 AM",
      pnl: "-2.19%",
      typeColor: "#38FF3F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "WIF",
      type: "Long",
      amount: "397.00",
      openPrice: "0.299700",
      closePrice: "0.576900",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-2.27%",
      typeColor: "#38FF3F",
      statusColor: "#38FF3F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "FARTCOIN",
      type: "Long",
      amount: "5.00",
      openPrice: "7.543000",
      closePrice: "297.450000",
      status: "Closed",
      openDate: "9/27/2025, 12:10:54 AM",
      pnl: "-1.04%",
      typeColor: "#38FF3F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "UNI",
      type: "Short",
      amount: "88.00",
      openPrice: "1.847000",
      closePrice: "-",
      status: "Closed",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-1.00%",
      typeColor: "#FF1F1F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "TIA",
      type: "Short",
      amount: "10.97",
      openPrice: "0.140900",
      closePrice: "18.177000",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-0.61%",
      typeColor: "#FF1F1F",
      statusColor: "#38FF3F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "TAO",
      type: "Long",
      amount: "10.70",
      openPrice: "1.847000",
      closePrice: "7.543000",
      status: "Open",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-2.16%",
      typeColor: "#38FF3F",
      statusColor: "#38FF3F",
      pnlColor: "#FF1F1F",
    },
    {
      token: "ETC",
      type: "Long",
      amount: "12.92",
      openPrice: "0.094200",
      closePrice: "7.757000",
      status: "Closed",
      openDate: "9/28/2025, 12:11:06 AM",
      pnl: "-2.24%",
      typeColor: "#38FF3F",
      statusColor: "#FF1F1F",
      pnlColor: "#FF1F1F",
    },
  ];

  return (
    <div className="rounded-[15px] px-[30px] pb-[10px] pt-[40px] bg-[rgba(255,255,255,0.05)] mb-[50px]">
      <div className="relative">
        <h2 className="text-[24px] font-[700] space-grotesk mb-[5px] text-[#FFF]">
          AI Trading Positions
        </h2>
        <p className="text-[18px] font-[500] text-[rgba(255,255,255,0.90)] mb-0">
          Live trading positions from our AI agent
        </p>
      </div>

      <div className="relative mt-[30px]">
        {/* Header Row */}
        <div className="flex items-end justify-between uppercase text-[14px] font-[600] text-white mb-[10px]">
          <div className="w-[10%] px-[15px]">Token</div>
          <div className="w-[10%] px-[15px]">Type</div>
          <div className="w-[10%] px-[15px]">Amount</div>
          <div className="w-[15%] px-[15px]">Open Price</div>
          <div className="w-[15%] px-[15px]">Close Price</div>
          <div className="w-[10%] px-[15px]">Status</div>
          <div className="w-[20%] px-[15px]">Open Date(UTC)</div>
          <div className="w-[10%] text-right px-[15px]">P&L</div>
        </div>

        {/* Table Rows */}
        <div className="relative max-h-[442px] overflow-y-auto pr-[15px] mr-[-20px] custom-scrollbar">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="flex items-end justify-between text-[16px] font-[500] mb-[6px] last:mb-0 text-[rgba(255,255,255,0.90)] rounded-[10px] backdrop-blur-[5px] py-[10px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.05) 100%)",
              }}
            >
              <div className="w-[10%] px-[15px] uppercase">{pos.token}</div>
              <div
                className="w-[10%] px-[15px]"
                style={{ color: pos.typeColor }}
              >
                {pos.type}
              </div>
              <div className="w-[10%] px-[15px]">{pos.amount}</div>
              <div className="w-[15%] px-[15px]">{pos.openPrice}</div>
              <div className="w-[15%] px-[15px]">{pos.closePrice}</div>
              <div
                className="w-[10%] px-[15px]"
                style={{ color: pos.statusColor }}
              >
                {pos.status}
              </div>
              <div className="w-[20%] px-[15px]">{pos.openDate}</div>
              <div
                className="w-[10%] text-right px-[15px]"
                style={{ color: pos.pnlColor }}
              >
                {pos.pnl}
              </div>
            </div>
          ))}
          
          {/* Scrollbar Styles */}
                <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background-color: rgba(255, 255, 255, 0.1);
                      border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background-color: rgba(255, 255, 255, 0.2);
                    }
                `}</style>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-[10px] text-[rgba(255,255,255,0.50)] text-[16px] font-[500] mb-[10px] mt-[20px]">
        <span>Showing 49 of 335 positions</span>
        <span>Page 1 of 7</span>
      </div>
    </div>
  );
};

export default AITradingPositions;
