"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeMobileMenu from "./HomeMobileMenu";
import ContainerWrapper from "@/src/Component/Core/ContainerWrapper";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

const Header = () => {
  const [account, setAccount] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) setAccount(accounts[0]);
      });

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) setAccount(accounts[0]);
        else setAccount(null);
      });
    }
  }, []);

  // Detect click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not detected. Please install MetaMask extension.");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setShowDropdown(false);
  };

  const shortAddress = (addr) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  return (
    <div className="main-header absolute z-[9999] top-0 left-0 w-full">
      <ContainerWrapper>
        <div className="flex items-center justify-between gap-[30px] py-[9px] lg:py-0">
          {/* Logo */}
          <div className="left">
            <Link href="/" className="logo">
              <Image
                src="/assets/images/logo/logo.svg"
                alt="logo"
                height={80}
                width={190}
                className="h-[80px] w-[190px] xl:w-[130px] md:h-[65px] md:w-[150px]"
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="right">
            <div className="flex items-center justify-end gap-[16px]">
              {/* Social Buttons */}
              <ul className="flex items-center justify-end gap-[16px] lg:hidden">
                {["book.svg", "tg.svg", "x.svg"].map((icon, i) => (
                  <li key={i} className="social-icon-btn">
                    <Link
                      href="#"
                      className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px]"
                    >
                      <img
                        src={`./assets/images/icons/${icon}`}
                        alt="icon"
                        className="w-[20px]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div
                ref={dropdownRef}
                className="relative bg-[rgba(255,255,255,0.10)] lg:hidden p-[7px] rounded-[12px] flex items-end justify-end gap-[8px]"
              >
                <Link
                  href="/ai-agent"
                  className="buy-btn hov-btn no-border bg-transparent rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] text-white font-[600] text-[16px] space-grotesk"
                >
                  <img
                    src="/assets/images/icons/ai-agent.svg"
                    alt="icon"
                    className="brightness-[100]"
                  />
                  <span>AI Agent</span>
                </Link>

                <Link
                  href="/terminal"
                  className="buy-btn hov-btn no-border bg-transparent rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] text-white font-[600] text-[16px] space-grotesk"
                >
                  <img
                    src="/assets/images/icons/terminal.svg"
                    alt="icon"
                    className="brightness-[100]"
                  />
                  <span>Terminal</span>
                </Link>

                {/* ✅ Connect Wallet / Dropdown */}
                {account ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="buy-btn hov-btn no-border group border-[none] outline-[none] rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] text-[#111111] text-center font-[600] text-[16px] space-grotesk"
                    >
                      <img
                        src="/assets/images/icons/wallet.svg"
                        alt="wallet"
                        className="brightness-0"
                      />
                      <span>{shortAddress(account)}</span>
                    </button>

                    {showDropdown && (
                      <div className="absolute font-[600] text-[16px] space-grotesk right-[-8px] mt-[10px] w-[180px] rounded-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[8px] p-[8px] shadow-lg flex flex-col animate-fadeIn">
                        <Link
                          href="/profile-settings"
                          className="px-[8px] py-[8px] text-white text-[15px] rounded-[8px] hover:bg-[rgba(255,255,255,0.15)] flex items-center justify-start gap-[8px] transition-all duration-200"
                          onClick={() => setShowDropdown(false)}
                        >
                          <Icon icon="akar-icons:gear" width="20" height="20" />
                          Profile Settings
                        </Link>
                        <button
                          onClick={disconnectWallet}
                          className="text-left px-[8px] py-[8px] text-[#FF1F1F] text-[15px] rounded-[8px] hover:bg-[rgba(255,255,255,0.15)] flex items-center justify-start gap-[8px] transition-all duration-200"
                        >
                          <Icon icon="material-symbols:logout-rounded" width="20" height="20" />
                          Disconnect
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={connectWallet}
                    className="buy-btn hov-btn no-border group border-[none] outline-[none] rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] text-[#111111] text-center font-[600] text-[16px] space-grotesk"
                  >
                    <img
                      src="/assets/images/icons/wallet.svg"
                      alt="wallet"
                      className="brightness-0"
                    />
                    <span>Connect Wallet</span>
                  </button>
                )}
              </div>

              <div className="hidden lg:block mr-[16px]">
                <HomeMobileMenu />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Header;
