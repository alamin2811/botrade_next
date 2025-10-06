"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ethers } from "ethers";
import { useRouter } from "next/router";

const HomeMobileMenu = () => {
    const router = useRouter();
    const [account, setAccount] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownRef = useRef(null);

    // ✅ Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // ✅ Check if wallet already connected
    useEffect(() => {
        if (typeof window !== "undefined" && window.ethereum) {
            window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
                if (accounts.length > 0) setAccount(accounts[0]);
            });
        }
    }, []);

    // ✅ Connect MetaMask
    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                alert("MetaMask not found! Please install it.");
                return;
            }
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
        } catch (err) {
            console.error(err);
        }
    };

    // ✅ Disconnect wallet
    const disconnectWallet = () => {
        setAccount(null);
        setShowDropdown(false);
    };

    // ✅ Short wallet address
    const shortAddress = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "";

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="rounded-none drawer-content">
                {/* Menu button */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                    <Icon icon="famicons:menu" width="24" height="24" />
                </label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="max-w-[300px] w-full p-[30px] h-full !rounded-[0px] relative">
                    {/* Logo */}
                    <Link href="/">
                        <Image src="/assets/images/logo/logo.svg" alt="logo" height="65" width="150" />
                    </Link>

                    {/* Close icon */}
                    <label htmlFor="my-drawer-4" className="drawer-button absolute top-[30px] right-[30px] z-10">
                        <Icon icon="mingcute:close-fill" width="24" height="24" />
                    </label>

                    {/* Buttons */}
                    <div className="mb-[20px] mt-[40px]">
                        {/* AI Agent */}
                        <Link
                            href="/ai-agent"
                            className="buy-btn hov-btn no-border bg-[rgba(255,255,255,0.10)] group rounded-[10px] h-[50px] mb-[10px] px-[15px] flex items-center justify-center gap-[10px] text-white text-[16px] font-[600] space-grotesk"
                        >
                            <img src="/assets/images/icons/ai-agent.svg" alt="AI Agent" className="brightness-[100]" />
                            <span className="btn-hov-text mt-[8px]">
                                <span className="btn-text">AI Agent</span>
                                <span className="btn-text">AI Agent</span>
                            </span>
                        </Link>

                        {/* Terminal */}
                        <Link
                            href="/terminal"
                            className="buy-btn hov-btn no-border bg-[rgba(255,255,255,0.10)] group rounded-[10px] h-[50px] mb-[10px] px-[15px] flex items-center justify-center gap-[10px] text-white text-[16px] font-[600] space-grotesk"
                        >
                            <img src="/assets/images/icons/terminal.svg" alt="Terminal" className="brightness-[100]" />
                            <span className="btn-hov-text mt-[8px]">
                                <span className="btn-text">Terminal</span>
                                <span className="btn-text">Terminal</span>
                            </span>
                        </Link>

                        {/* Wallet / Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            {!account ? (
                                <button
                                    onClick={connectWallet}
                                    className="buy-btn hov-btn no-border bg-[rgba(255,255,255,0.10)] group hover:bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] rounded-[10px] h-[50px] mb-[10px] px-[15px] flex items-center justify-center gap-[10px] text-white hover:text-[#111111] text-[16px] font-[600] w-full space-grotesk"
                                >
                                    <img src="/assets/images/icons/wallet.svg" alt="Wallet" className="brightness-[100] group-hover:brightness-0" />
                                    <span className="btn-hov-text mt-[8px]">
                                        <span className="btn-text">Connect Wallet</span>
                                        <span className="btn-text">Connect Wallet</span>
                                    </span>
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="buy-btn hov-btn no-border bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] group rounded-[10px] h-[50px] mb-[10px] px-[15px] flex items-center justify-center gap-[10px] text-[#111111] font-[600] text-[16px] w-full space-grotesk"
                                    >
                                        <img src="/assets/images/icons/wallet.svg" alt="Wallet" className="brightness-0" />
                                        <span>{shortAddress}</span>
                                    </button>

                                    {showDropdown && (
                                        <div className="absolute right-0 mt-[-5px] z-10 w-full bg-[#2B3139] p-[10px] backdrop-blur-[5px] rounded-[10px] overflow-hidden shadow-lg">
                                            <Link
                                                href="/profile-settings"
                                                onClick={(e) => {
                                                    // If already on this page, reload
                                                    if (router.pathname === "/profile-settings") {
                                                        e.preventDefault(); // Prevent normal Link behavior
                                                        router.reload(); // Reload the page
                                                    }
                                                }}
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

                    {/* Social Icons */}
                    <ul className="flex items-center justify-center gap-[16px]">
                        <li className="social-icon-btn">
                            <Link
                                href="#"
                                className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px]"
                            >
                                <span className="btn-icons !h-[24px] mt-[-3px]">
                                    <span className="btn-icon">
                                        <img src="./assets/images/icons/book.svg" alt="icon" className="w-[22px]" />
                                    </span>
                                    <span className="btn-icon">
                                        <img src="./assets/images/icons/book.svg" alt="icon" className="w-[22px]" />
                                    </span>
                                </span>
                            </Link>
                        </li>

                        <li className="social-icon-btn">
                            <Link
                                href="#"
                                className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px]"
                            >
                                <span className="btn-icons !h-[24px]">
                                    <span className="btn-icon mt-[-3px]">
                                        <img src="./assets/images/icons/tg.svg" alt="icon" className="w-[20px]" />
                                    </span>
                                    <span className="btn-icon">
                                        <img src="./assets/images/icons/tg.svg" alt="icon" className="w-[20px]" />
                                    </span>
                                </span>
                            </Link>
                        </li>

                        <li className="social-icon-btn">
                            <Link
                                href="#"
                                className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px]"
                            >
                                <span className="btn-icons !h-[24px]">
                                    <span className="btn-icon">
                                        <img src="./assets/images/icons/x.svg" alt="icon" className="w-[16px]" />
                                    </span>
                                    <span className="btn-icon">
                                        <img src="./assets/images/icons/x.svg" alt="icon" className="w-[16px]" />
                                    </span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeMobileMenu;
