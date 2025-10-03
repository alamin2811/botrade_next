import ContainerWrapper from '@/src/Component/Core/ContainerWrapper';
import React from 'react';
import VaultActions from './VaultActions';

const cardData = [
    { icon: './assets/images/icons/value.svg', value: '$985.02', label: 'Total Value Locked' },
    { icon: './assets/images/icons/apy.svg', value: '0.00%', label: 'Current APY' },
    { icon: './assets/images/icons/price.svg', value: '$0.834', label: 'Share Price' },
    { icon: './assets/images/icons/supply.svg', value: '1,180.88', label: 'Total Supply' },
];

const tokenInfo = [
    { label: 'Name', value: 'Knidos Fund Token - 1' },
    { label: 'Symbol', value: 'KFT1', isBadge: true },
    { label: 'Contract Address', value: '0xA066...8741' },
    { label: 'Total Supply', value: '1,180.88' },
    { label: 'Your LP Shares', value: '586.01', unit: 'KFT1' },
];

const positionData = [
    { label: 'Portfolio Value', value: '$258.23' },
    { label: 'Share Price', value: '$0.83' },
    { label: 'Available USDC', value: '896.00 USDC' },
    { label: 'Share Percentage', value: '258%' },
];

const InvestContent = () => {
    return (
        <div className="relative z-10 mt-[-435px] mb-[90px]">
            <ContainerWrapper>
                {/* Intro Text */}
                <div className="max-w-[1070px] mx-auto">
                    <p className="text-center text-[18px] font-[500] text-[rgba(255,255,255,0.90)] mb-[50px]">
                        An AI-driven strategy executing trades across the top 100 crypto assets. Signal-based, high-frequency. Autonomous AI Strategies. Real Returns. Decentralized Execution. Knidos is your on-chain AI fund manager. Choose from three optimized pools and let our algorithm do the work—while you stay in control.
                    </p>
                </div>

                {/* Top Info Cards */}
                <div className="flex flex-wrap mx-[-15px]">
                    {cardData.map((card, index) => (
                        <div key={index} className="w-1/4 px-[15px]">
                            <div className="rounded-[20px] bg-[rgba(255,255,255,0.05)] p-[30px] overflow-hidden mb-[30px]">
                                <img src={card.icon} alt="icon" />
                                <h3 className="text-white font-[700] text-[30px] space-grotesk mt-[30px] mb-[5px] leading-[120%]">{card.value}</h3>
                                <p className="text-[16px] font-[600] text-[rgba(255,255,255,0.85)]">{card.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vault Actions Token Info and Your Position */}
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="w-2/3 px-[15px]">
                        <VaultActions/>
                    </div>

                    {/* Token Info */}
                    <div className="w-1/3 px-[15px]">
                        <div className="rounded-[15px] overflow-hidden bg-[rgba(255,255,255,0.05)] p-[30px] mb-[30px]">
                            <ul className='my-[-20px]'>
                                {tokenInfo.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-[16px] font-[700] text-white py-[20px] border-b-[1px] gap-[10px] last:border-0 border-[rgba(255,255,255,0.10)] flex items-center justify-between space-grotesk"
                                    >
                                        <span>{item.label}</span>
                                        {item.isBadge ? (
                                            <span className="w-[60px] h-[29px] flex items-center justify-center border-[1px] rounded-[8px] text-[#38FF3F] bg-[rgba(255,255,255,0.05)] border-[rgba(56,255,63,0.30)]">
                                                {item.value}
                                            </span>
                                        ) : (
                                            <span className="text-[18px]">
                                                {item.value} {item.unit && <span className="text-[#38FF3F]">{item.unit}</span>}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Your Position */}
                    <div className="w-2/3 px-[15px]">
                        <div className="rounded-[15px] overflow-hidden bg-[rgba(255,255,255,0.05)] p-[30px] mb-[30px]">
                            <h3 className="mb-[20px] text-white font-[700] text-[24px] space-grotesk leading-[120%]">Your Position</h3>
                            <div className="flex flex-wrap mx-[-15px] mb-[-30px]">
                                {positionData.map((pos, index) => (
                                    <div key={index} className="w-1/2 px-[15px]">
                                        <div className="bg-[rgba(255,255,255,0.10)] px-[20px] py-[18px] flex items-center justify-between gap-[10px] rounded-[10px] mb-[30px]">
                                            <span className="text-[rgba(255,255,255,0.90)] text-[16px] font-[700] leading-[120%] space-grotesk">
                                                {pos.label}
                                            </span>
                                            <span className="text-[#FFF] text-[18px] font-[700] leading-[120%] space-grotesk">
                                                {pos.value}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
};

export default InvestContent;
