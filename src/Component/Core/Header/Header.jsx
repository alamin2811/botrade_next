"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import HomeMobileMenu from "./HomeMobileMenu";
import ContainerWrapper from "@/src/Component/Core/ContainerWrapper";
import { ethers } from "ethers";
import { Icon } from "@iconify/react";

const Header = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Connect Wallet (MetaMask)
  const connectWallet = async () => {
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } else {
        alert("MetaMask not detected. Please install MetaMask extension.");
      }
    } catch (error) {
      console.error("MetaMask connection failed:", error);
    }
  };

  // ✅ Auto detect wallet if already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setWalletAddress(accounts[0].address);
          }
        } catch (err) {
          console.error("Error checking wallet connection:", err);
        }
      }
    };
    checkConnection();

    // Listen for account changes
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress("");
        }
      });
    }
  }, []);

  // ✅ Disconnect wallet
  const disconnectWallet = () => {
    setWalletAddress("");
    setDropdownOpen(false);
  };

  // ✅ Click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Shorten address
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
                height="80"
                width="190"
                className="h-[80px] w-[190px] xl:w-[130px] md:h-[65px] md:w-[150px]"
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="right">
            <div className="flex items-center justify-end gap-[16px]">
              {/* ✅ Social Icons */}
              <ul className="flex items-center justify-end gap-[16px] lg:hidden">
                {[
                  { href: "#", src: "./assets/images/icons/book.svg", size: 22 },
                  { href: "#", src: "./assets/images/icons/tg.svg", size: 20 },
                  { href: "#", src: "./assets/images/icons/x.svg", size: 16 },
                ].map((icon, idx) => (
                  <li key={idx} className="social-icon-btn group relative">
                    <Link
                      href={icon.href}
                      className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.20)]"
                    >
                      <img
                        src={icon.src}
                        alt="icon"
                        style={{ width: `${icon.size}px` }}
                        className="transition-transform duration-300 group-hover:rotate-[15deg]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="bg-[rgba(255,255,255,0.10)] lg:hidden p-[7px] rounded-[12px] flex items-end justify-end relative">
                <Link
                  href="/ai-agent"
                  className="buy-btn hov-btn no-border bg-transparent group rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] text-white font-[600] text-[16px] space-grotesk"
                >
                  <img
                    src="/assets/images/icons/ai-agent.svg"
                    alt="icon"
                    className="brightness-[100]"
                  />
                  <span className="btn-hov-text">
                    <span className="btn-text">AI Agent</span>
                    <span className="btn-text">AI Agent</span>
                  </span>
                </Link>

                <Link
                  href="/terminal"
                  className="buy-btn hov-btn no-border bg-transparent group rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] text-white font-[600] text-[16px] space-grotesk"
                >
                  <img
                    src="/assets/images/icons/terminal.svg"
                    alt="icon"
                    className="brightness-[100]"
                  />
                  <span className="btn-hov-text">
                    <span className="btn-text">Terminal</span>
                    <span className="btn-text">Terminal</span>
                  </span>
                </Link>

                {/* ✅ Wallet Button */}
                <div className="relative" ref={dropdownRef}>
                  {!walletAddress ? (
                    <button
                      onClick={connectWallet}
                      className="buy-btn hov-btn no-border group bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-none rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] text-[#111] font-[600] text-[16px] space-grotesk"
                    >
                      <img
                        src="/assets/images/icons/wallet.svg"
                        alt="icon"
                        className="brightness-0"
                      />
                      <span className="btn-hov-text">
                        <span className="btn-text">Join Waitlist</span>
                        <span className="btn-text">Join Waitlist</span>
                      </span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="buy-btn hov-btn no-border group bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-none rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] text-[#111] font-[600] text-[16px] space-grotesk"
                      >
                        <img
                          src="/assets/images/icons/wallet.svg"
                          alt="icon"
                          className="brightness-0"
                        />
                        {shortAddress(walletAddress)}
                      </button>

                      {dropdownOpen && (
                        <div className="absolute right-[-8px] mt-[10px] w-[200px] bg-[rgba(255,255,255,0.10)] p-[10px] backdrop-blur-[5px] rounded-[10px] overflow-hidden shadow-lg">
                          <Link
                            href="/profile-settings"
                            className="px-[12px] py-[8px] rounded-[8px] flex items-center justify-start gap-[8px] text-white font-[600] text-[16px] space-grotesk hover:bg-[rgba(255,255,255,0.15)]"
                          >
                            <Icon icon="akar-icons:gear" width="20" height="20" />
                            Profile Settings
                          </Link>
                          <button
                            onClick={disconnectWallet}
                            className="w-full text-left px-[12px] py-[8px] rounded-[8px] flex items-center justify-start gap-[8px] text-[#FF1F1F] font-[600] text-[16px] space-grotesk hover:bg-[rgba(255,255,255,0.15)]"
                          >
                            <Icon icon="material-symbols:logout-rounded" width="20" height="20" />
                            Disconnect
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
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
