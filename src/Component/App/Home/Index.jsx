"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../Core/Header/Header';
import HomeBanner from './HomeBanner/HomeBanner';
import FeatureSection from './FeatureSection/FeatureSection';
import BackedBy from './BackedBy/BackedBy';
import OurPartners from './OurPartners/OurPartners';
import AboutUs from './AboutUs/AboutUs';
import Roadmap from './Roadmap/Roadmap';
import HowItWorks from './HowItWorks/HowItWorks';
import Faq from './Faq/Faq';
import Footer from '../../Core/Footer';
import { ethers } from 'ethers';

const HomeComponent = () => {
  const [account, setAccount] = useState(null);

  // Check if wallet is already connected
  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) setAccount(accounts[0]);
      });
    }
  }, []);

  // Connect MetaMask
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

  return (
    <div className="overflow-x-hidden">
      <Header account={account} connectWallet={connectWallet} />
      <HomeBanner account={account} connectWallet={connectWallet} />
      <FeatureSection />
      <BackedBy />
      <OurPartners />
      <AboutUs />
      <Roadmap />
      <HowItWorks />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomeComponent;
