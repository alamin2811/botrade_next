"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const VaultActions = () => {
  const [activeTab, setActiveTab] = useState("deposit");
  const [amount, setAmount] = useState("");

  const sharePrice = 0.834;
  const shares = amount
    ? (parseFloat(amount) / sharePrice).toFixed(6)
    : "0.000000";

  return (
    <div className="rounded-[15px] overflow-hidden bg-[rgba(255,255,255,0.05)] p-[30px] md:px-[15px] md:py-[20px] min-h-[552px] mb-[30px] lg:mb-[20px]">
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
        <div className="flex justify-between max-w-[300px] mb-[25px] p-[10px] rounded-[15px] overflow-hidden gap-[20px] bg-[rgba(255,255,255,0.05)]">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`flex items-center justify-center text-[16px] font-[700] space-grotesk border-0 gap-[8px] rounded-[12px] px-[16px] py-[5px] h-[44px] transition hover:bg-[rgba(255,255,255,0.10)] hover:text-[#38FF3F] ${activeTab === "deposit"
                ? "bg-[rgba(255,255,255,0.10)] text-[#38FF3F]"
                : "bg-[transparent] text-white"
              }`}
          >
            <span>
              <Icon icon="bx:arrow-to-bottom" width="24" height="24" />
            </span>{" "}
            Deposit
          </button>
          <button
            onClick={() => setActiveTab("withdraw")}
            className={`flex items-center justify-center text-[16px] font-[700] space-grotesk border-0 gap-[8px] rounded-[12px] px-[16px] py-[5px] h-[44px] transition hover:bg-[rgba(255,255,255,0.10)] hover:text-[#38FF3F] ${activeTab === "withdraw"
                ? "bg-[rgba(255,255,255,0.10)] text-[#38FF3F]"
                : "bg-[transparent] text-white"
              }`}
          >
            <span>
              <Icon icon="bx:arrow-to-top" width="24" height="24" />
            </span>{" "}
            Withdraw
          </button>
        </div>

        {/* Deposit Content */}
        {activeTab === "deposit" && (
          <div className="deposite-content">
            <div className="flex items-center justify-between gap-[10px]">
              <label className="text-[16px] uppercase space-grotesk mb-[0px] font-[700] text-white">
                AMOUNT (USDC)
              </label>
              <span className="text-[14px] uppercase space-grotesk mb-[0px] font-[600] text-[rgba(255,255,255,0.90)]">
                0 : Balance
              </span>
            </div>
            <div className="relative mt-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full bg-transparent border border-[rgba(255,255,255,0.08)] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
              />
            </div>
            <p className="text-[14px] font-[600] text-[rgba(255,255,255,0.90)] mt-[10px] mb-[10px]">
              ALLOWANCE: 0.00 USDC
            </p>

            {/* Info */}
            <div className="mb-[10px]">
              <p className="text-[14px] font-[600] py-[15px] !m-0 text-[rgba(255,255,255,0.90)] flex items-center justify-between border-b-[1px] border-[rgba(255,255,255,0.10)]">
                You will receive:{" "}
                <span className="text-white text-[16px] font-[700]">
                  {shares} shares
                </span>
              </p>
              <p className="text-[14px] font-[600] py-[15px] !m-0 text-[rgba(255,255,255,0.90)] flex items-center justify-between">
                Share price:{" "}
                <span className="text-[#38FF3F] text-[16px] font-[700]">
                  ${sharePrice}
                </span>
              </p>
            </div>
            <button
              href="#"
              className="buy-btn hov-btn no-border group bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-[none] outline-[none] box-shadow-[none] rounded-[10px] h-[60px] md:h-[50px] w-full mx-auto px-[15px] flex items-center justify-center gap-[10px] text-[#111] capitalize text-center font-[600] text-[16px] sm:text[14px] space-grotesk"
            >
              <span className="btn-hov-text">
                <span className="btn-text">Link Email To Join Waitlist</span>
                <span className="btn-text">Link Email To Join Waitlist</span>
              </span>
            </button>
          </div>
        )}

        {/* Withdraw Content */}
        {activeTab === "withdraw" && (
          <div className="withdraw-content">
            {/* New Withdrawal Section */}
            <div className="mb-[30px]">
              <h4 className="text-white font-[700] text-[18px] mb-[15px]">
                New Withdrawal
              </h4>

              {/* Shares Input */}
              <label className="text-[16px] uppercase space-grotesk font-[700] text-white">
                Shares to Withdraw
              </label>
              <div className="relative mt-2 mb-[5px]">
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.08)] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <p className="text-[14px] font-[600] text-[rgba(255,255,255,0.90)] mb-[10px]">
                Available: 0.000 VAULT
              </p>

              {/* You Will Receive */}
              <div className="mb-[15px]">
                <p className="text-[14px] font-[600] py-[15px] !m-0 text-[rgba(255,255,255,0.90)] flex items-center justify-between border-b-[1px] border-[rgba(255,255,255,0.10)]">
                  You will receive:{" "}
                  <span className="text-white text-[16px] font-[700]">0.00 USDC</span>
                </p>
              </div>

              {/* Button */}
              <button
                href="#"
                className="buy-btn hov-btn no-border group bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-[none] outline-[none] box-shadow-[none] rounded-[10px] h-[60px] md:h-[50px] w-full mx-auto px-[15px] flex items-center justify-center gap-[10px] text-[#111] capitalize text-center font-[600] text-[16px] sm:text[14px] space-grotesk"
              >
                <span className="btn-hov-text">
                  <span className="btn-text">Link Email To Join Waitlist</span>
                  <span className="btn-text">Link Email To Join Waitlist</span>
                </span>
              </button>
            </div>

            {/* Pending Withdrawals Section */}
            <div>
              <h4 className="text-white font-[700] text-[18px] mb-[10px]">
                Pending Withdrawals
              </h4>
              <p className="text-[14px] text-[rgba(255,255,255,0.70)] mb-[10px]">
                Only showing unclaimed withdrawal requests. Claimed requests are not
                displayed.
              </p>
              <div className="border border-[rgba(255,255,255,0.08)] rounded-md px-4 py-3 text-center text-[14px] text-[rgba(255,255,255,0.70)]">
                No pending withdrawals
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VaultActions;
