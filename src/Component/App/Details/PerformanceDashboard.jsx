"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Original data
const originalData = [
  { date: "01", value: 600 },
  { date: "03", value: 620 },
  { date: "05", value: 580 },
  { date: "07", value: 1053.08 },
  { date: "09", value: 900 },
  { date: "11", value: 1100 },
  { date: "13", value: 1500 },
  { date: "15", value: 1300 },
  { date: "17", value: 1400 },
  { date: "19", value: 1200 },
  { date: "21", value: 1000 },
  { date: "23", value: 850 },
  { date: "25", value: 900 },
  { date: "27", value: 950 },
  { date: "29", value: 1108.11 },
  { date: "30", value: 1108.11 },
];

// Fill all dates 01–30
const data = Array.from({ length: 30 }, (_, i) => {
  const day = (i + 1).toString().padStart(2, "0");
  const found = originalData.find(d => d.date === day);
  return { date: day, value: found ? found.value : null };
});

// Custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#121212] text-white text-xs px-3 py-2 rounded-md shadow-lg border border-[#38FF3F]/20">
        <p className="font-semibold">${payload[0].value?.toFixed(2)}</p>
        <p className="text-[11px] text-gray-400">APR {label}, 2025</p>
      </div>
    );
  }
  return null;
};

const PerformanceDashboard = () => {
  const [activeTab, setActiveTab] = useState("testnet");

  return (
    <div className="relative z-10 mb-[50px]">
      {/* Tabs */}
      <div className="flex items-center justify-start px-[10px] rounded-t-[15px] pt-[10px] gap-[10px] max-w-[335px] w-full bg-[rgba(255,255,255,0.05)]">
        <button
          onClick={() => setActiveTab("testnet")}
          className={`w-[150px] h-[50px] rounded-[10px] text-[16px] font-[700] transition-all ${
            activeTab === "testnet"
              ? "bg-[rgba(255,255,255,0.10)] text-white"
              : "text-[#FFFFFF80] hover:text-white"
          }`}
        >
          Testnet
        </button>
        <button
          disabled
          className="w-[150px] h-[50px] rounded-[10px] text-[16px] font-[700] bg-transparent text-gray-500 cursor-not-allowed border border-white/10"
        >
          Mainnet (Soon)
        </button>
      </div>

      <div className="rounded-[15px] rounded-tl-[0] px-[30px] py-[40px] bg-[rgba(255,255,255,0.05)]">
        <div className="flex items-center justify-between mb-[30px]">
          <div className="relative">
            <h2 className="text-[24px] font-[700] space-grotesk mb-[5px] text-[#FFF]">
              Performance Dashboard
            </h2>
            <p className="text-[18px] font-[500] text-[rgba(255,255,255,0.90)] mb-0">
              Live performance metrics and equity curve
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex lg:flex-wrap gap-[20px] text-white font-[700] space-grotesk max-w-[745px] w-full">
            <div className="flex items-center justify-between px-[20px] py-[10px] h-[50px] bg-[rgba(217,217,217,0.10)] rounded-[10px] max-w-[235px] w-full gap-[16px]">
              <p className="text-[16px]">Current APY</p>
              <p className="text-[18px] bg-gradient-to-r from-[#38FF3F] to-[#00BD94] bg-clip-text text-transparent font-semibold">
                120.50%
              </p>
            </div>
            <div className="flex items-center justify-between px-[20px] py-[10px] h-[50px] bg-[rgba(217,217,217,0.10)] rounded-[10px] max-w-[235px] w-full gap-[16px]">
              <p className="text-[16px]">Open Positions</p>
              <p className="text-[18px]">1</p>
            </div>
            <div className="flex items-center justify-between px-[20px] py-[10px] h-[50px] bg-[rgba(217,217,217,0.10)] rounded-[10px] max-w-[235px] w-full gap-[16px]">
              <p className="text-[16px]">TVL</p>
              <p className="text-[18px]">$1,108.11</p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[300px] ml-[-10px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
            >
              <defs className="opacity-[15%]">
                <linearGradient id="colorGreen" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="50%" stopColor="rgba(56,255,63,0.00)" />
                  <stop offset="100%" stopColor="#38FF3F" />
                </linearGradient>
              </defs>

              {/* Dotted grid lines */}
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgba(255,255,255,0.15)"
              />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                ticks={Array.from({ length: 30 }, (_, i) =>
                  (i + 1).toString().padStart(2, "0")
                )}
                tick={{
                  fill: "rgba(255,255,255,0.80)",
                  fontSize: "14px",
                  dy: 15,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "rgba(255,255,255,0.80)",
                  fontSize: "14px",
                  textAnchor: "start",
                  dx: -45,
                  dy: -2,
                }}
                tickFormatter={(v) => `$${v}`}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "rgba(255,255,255,0.15)",
                  strokeWidth: 1,
                  strokeDasharray: "3 3",
                }}
              />

              <Area
                type="linear"
                dataKey="value"
                stroke="#38FF3F"
                strokeWidth={2}
                fill="url(#colorGreen)"
                dot={false}
                connectNulls={true} // ✅ connect missing points
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
