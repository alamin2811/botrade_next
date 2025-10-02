"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const VaultActions = () => {
  const [activeTab, setActiveTab] = useState("deposit"); // no TS generic
  const [amount, setAmount] = useState("");

  const sharePrice = 0.834;
  const shares = amount
    ? (parseFloat(amount) / sharePrice).toFixed(6)
    : "0.000000";

  return (
    <div className="rounded-[15px] overflow-hidden bg-[rgba(255,255,255,0.05)] p-[30px] mb-[30px]">
      {/* Header */}
      <div className="flex items-center justify-start gap-[10px] mb-[40px]">
        <h3 className="text-white font-[700] text-[24px] space-grotesk leading-[120%]">
          Vault Actions
        </h3>
        <span
          className="flex items-center justify-center text-[#111] font-[700] text-[16px] h-[27px] w-[51px] rounded-[8px]"
          style={{
            background:
              "linear-gradient(96deg, #38FF3F 6.86%, #00BD94 97.02%)",
          }}
        >
          Live
        </span>
      </div>

      {/* Tabs */}
      <div className="relative">
        <div className="flex justify-between max-w-[300px] p-[10px] rounded-[15px] overflow-hidden gap-[20px] bg-[rgba(255,255,255,0.05)]">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`flex items-center justify-center text-[16px] font-[700] space-grotesk border-0 gap-[8px] rounded-[12px] px-[16px] py-[5px] h-[44px] transition hover:bg-[rgba(255,255,255,0.10)] hover:text-green-400 ${
              activeTab === "deposit"
                ? "bg-[rgba(255,255,255,0.10)] text-green-400"
                : "bg-[transparent] text-white"
            }`}
          >
            <span><Icon icon="bx:arrow-from-bottom" width="24" height="24" /></span> Deposit
          </button>
          <button
            onClick={() => setActiveTab("withdraw")}
            className={`flex items-center justify-center text-[16px] font-[700] space-grotesk border-0 gap-[8px] rounded-[12px] px-[16px] py-[5px] h-[44px] transition hover:bg-[rgba(255,255,255,0.10)] hover:text-green-400 ${
              activeTab === "withdraw"
                ? "bg-[rgba(255,255,255,0.10)] text-green-400"
                : "bg-[transparent] text-white"
            }`}
          >
            <span><Icon icon="bx:arrow-from-bottom" width="24" height="24" /></span> Withdraw
          </button>
        </div>

        {/* Amount Input */}
        <div>
          <label className="text-sm font-medium text-gray-400">
            AMOUNT (USDC)
          </label>
          <div className="relative mt-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
              BALANCE: 0
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="text-sm space-y-2 text-gray-400">
          <p>ALLOWANCE: 0.00 USDC</p>
          <p>
            You will receive: <span className="text-white">{shares}</span>{" "}
            shares
          </p>
          <p>
            Share price: <span className="text-green-400">${sharePrice}</span>
          </p>
        </div>

        {/* Button */}
        <button className="w-full py-3 rounded-md font-semibold bg-gradient-to-r from-green-400 to-green-500 text-black hover:opacity-90 transition">
          Link Email To Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default VaultActions;
