import React from 'react'

const ChatCard = () => {
  return (
    <div className='pt-[30px] px-[30px] pb-[40px] bg-[rgba(255,255,255,0.05)] rounded-[15px] backdrop-blur-[10px] relative z-10 mt-[-435px] mb-[90px]'>
      {/* Agent Header */}
      <div className="flex items-center justify-center mb-[40px] gap-[10px] text-[16px] font-[700] text-white mr-auto h-[46px] w-[108px] rounded-[12px] bg-[rgba(255,255,255,0.10)]">
        <img src="./assets/images/icons/bot.svg" alt="icon" />
        Agent
      </div>

      {/* Chat Body */}
      <div className="text-[16px] text-white font-[700] space-grotesk h-[635px] max-h-[635px] overflow-y-auto pr-[25px] mr-[-25px] custom-scrollbar">
        {/* User Message */}
        <div className="max-w-[647px] w-[max-content] ml-auto px-[20px] py-[10px] bg-[rgba(255,255,255,0.10)] rounded-[12px] rounded-br-[0px] mb-[20px]">
          What is the valuation of $AVAX ?
        </div>

        {/* Bot Reply */}
        <div className="flex items-start justify-start gap-[10px]">
          <div className="h-[51px] w-[51px] flex items-center justify-center bg-[rgba(56,255,63,0.08)] rounded-[12px] rounded-tr-[0px]">
            <img src="./assets/images/icons/bot-green.svg" alt="icon" />
          </div>
          <div className="max-w-[647px] w-[max-content] mr-auto px-[20px] py-[10px] bg-[rgba(56,255,63,0.08)] rounded-[12px] rounded-tl-[0px] mb-[20px]">
            Avalanche ($AVAX) has a market cap of $12.67 billion. The current price is $30.00. The 24h trading volume is $894.14 million.
          </div>
        </div>

        {/* User Message */}
        <div className="max-w-[647px] w-[max-content] ml-auto px-[20px] py-[10px] bg-[rgba(255,255,255,0.10)] rounded-[12px] rounded-br-[0px] mb-[20px]">
          Give Me the price
        </div>

        {/* Bot Reply */}
        <div className="flex items-start justify-start gap-[10px]">
          <div className="h-[51px] w-[51px] flex items-center justify-center bg-[rgba(56,255,63,0.08)] rounded-[12px] rounded-tr-[0px]">
            <img src="./assets/images/icons/bot-green.svg" alt="icon" />
          </div>
          <div className="max-w-[647px] w-[max-content] mr-auto px-[20px] py-[10px] bg-[rgba(56,255,63,0.08)] rounded-[12px] rounded-tl-[0px] mb-[20px]">
            The current price of Avalanche ($AVAX) is $30.00
          </div>
        </div>
        
        
        
      </div>

      {/* Input Box */}
      <div className="rounded-[12px] border-[2px] border-[rgba(255,255,255,0.08)] flex items-start justify-between gap-[10px] mt-[20px]">
        <textarea
          placeholder='Type Here ....'
          className='h-[60px] w-full py-[15px] px-[20px] text-white bg-transparent resize-none border-0 outline-none placeholder:text-[rgba(255,255,255,0.50)] text-[18px] font-[700]'
        />
        <button>
          <img src="./assets/images/icons/send.svg" alt="icon" className='px-[20px] py-[20px]' />
        </button>
      </div>

      {/* Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </div>
  )
}

export default ChatCard
