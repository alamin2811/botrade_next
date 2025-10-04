import Link from 'next/link';
import React from 'react'

const TerminalTable = () => {
    const tableData = [
        {
            analysis: "🧠 CREAM's current price is $1.12, with a 24h volume of $52,958. The price increased by 1.6% in the last 24 hours. The RSI is high at 87.9, indicating overbought conditions. Short-term analysis shows price above EMA9, EMA50, and EMA200. Mid-term analysis shows price near the upper Bollinger Band. Long-term analysis indicates oversold conditions with RSI at 26.1. Recent news lacks direct impact on CREAM. Monitor for potential price reversal. 📊",
            status: "Sent",
            date: "9/28/2025, 12:11:06 AM",
            link: "View Tweet",
        },
        {
            analysis: "🧠 KAITO surged +30% with 24h volume up 874%. Price trades above all key EMAs, confirming strong momentum. RSI on 4h is 86, signaling overbought but trend remains bullish. No major news impacting sentiment; technicals support continued strength short-term. 💎",
            status: "Sent",
            date: "9/28/2025, 9:00:56 AM",
            link: "View Tweet",
        },
        {
            analysis: "🧠 PNT surged +45.23% but shows weak fundamentals. Short-term price is at the upper Bollinger Band, signaling possible reversal. Mid- and long-term EMAs and RSI indicate a strong downward trend. No significant news supports the move; caution is warranted. 🔥",
            status: "Sent",
            date: "9/28/2025, 9:00:56 AM",
            link: "View Tweet",
        },
        {
            analysis: "🧠 CREAM surged +65.35%, showing extreme short-term momentum. RSI is above 87 on 15m, indicating overbought conditions. Price is above all short-term EMAs and at the upper Bollinger Band. No major news, but technicals suggest a potential reversal or profit-taking soon. 💎",
            status: "Sent",
            date: "9/28/2025, 9:00:56 AM",
            link: "View Tweet",
        },
        {
            analysis: "📊 Daily Crypto Market Report 🚀 Top Gainers: $CREAM +65.35%, $PNT +45.23%, $KAITO +30.28% 📉 Top Losers: $WTC -56.54%, $VIB -63.26%, $BETA -64.00% 🚀",
            status: "Sent",
            date: "9/28/2025, 9:00:56 AM",
            link: "View Tweet",
        },
        {
            analysis: "🧠 MIRA is experiencing a strong downward trend. The price is below key EMAs across all timeframes. RSI indicates a neutral position, not overbought or oversold. Recent trading volume is high, suggesting active market interest. No significant news impacts MIRA currently. 🔍",
            status: "Sent",
            date: "9/28/2025, 9:00:56 AM",
            link: "View Tweet",
        },
        {
            analysis: "🧠 CREAM surged 65.35% with strong short-term momentum. RSI is extremely high (15m: 87.9, 1h: 78.3), signaling overbought conditions. Price is above all EMAs and at the upper Bollinger Band. No recent news, so the move is likely technical-driven. Monitor for a potential reversal due to overextension. 🛠️",
            status: "Sent",
            date: "9/28/2025, 9:00:56 AM",
            link: "View Tweet",
        },
        {
            analysis: "🧠 CREAM surged 65.35% with strong short-term momentum. RSI is extremely high (15m: 87.9, 1h: 78.3), signaling overbought conditions. Price is above all EMAs and at the upper Bollinger Band. No recent news, so the move is likely technical-driven. Monitor for a potential reversal due to overextension. 🛠️",
            status: "Sent",
            date: "9/28/2025, 9:00:56 AM",
            link: "View Tweet",
        },
    ];

    return (
        <div className='bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] rounded-[15px] overflow-hidden max-h-[850px] py-[30px] px-[30px] mb-[120px] mt-[-435px]'>
            {/* Header */}
            <div className="flex items-start justify-between text-[14px] font-[600] uppercase text-white mb-[10px]">
                <div className='w-[60%] px-[15px]'>Analysis</div>
                <div className='w-[10%] px-[15px]'>Status</div>
                <div className='w-[20%] px-[15px]'>Open Date (UTC)</div>
                <div className='w-[10%] px-[15px]'>Link</div>
            </div>

            {/* Rows */}
            <div className="text-[14px] font-[600] leading-[150%] max-h-[745px] overflow-y-scroll pr-[13px] mr-[-22px] custom-scrollbar">
                {tableData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start justify-between rounded-[10px] backdrop-blur-[5px] py-[15px] mb-[8px] last:mb-0"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.10) 100%)',
                        }}
                    >
                        <div className='w-[60%] px-[15px] text-[rgba(255,255,255,0.90)]'>
                            {item.analysis}
                        </div>
                        <div className='w-[10%] px-[15px] text-[rgba(56,255,63,0.90)]'>
                            {item.status}
                        </div>
                        <div className='w-[20%] px-[15px] text-[rgba(255,255,255,0.90)]'>
                            {item.date}
                        </div>
                        <div className='w-[10%] px-[15px] text-[rgba(56,255,63,0.90)]'>
                            <Link href="#" className="hover:underline">
                                {item.link}
                            </Link>
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
    )
}

export default TerminalTable
