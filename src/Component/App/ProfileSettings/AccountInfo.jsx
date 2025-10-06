import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const AccountInfo = () => {
    // ✅ Data array for mapping
    const accountItems = [
        {
            id: 1,
            icon: "uil:envelope",
            iconColor: "#38FF3F",
            bgColor: "bg-[rgba(56,255,63,0.08)]",
            title: "Account Information",
            description: "Your account details and linked services",
            linkText: "Linked",
            linkColor: "text-[#38FF3F]",
            borderColor: "border-[rgba(56,255,63,0.30)]",
        },
        {
            id: 2,
            icon: "meteor-icons:telegram",
            iconColor: "#FFFFFF",
            bgColor: "bg-[rgba(255,255,255,0.05)]",
            title: "Account Information",
            description: "Your account details and linked services",
            linkText: "Link Telegram",
            linkColor: "text-[rgba(255,255,255,0.50)]",
            borderColor: "border-[rgba(255,255,255,0.20)]",
        },
        {
            id: 3,
            icon: "prime:twitter",
            iconColor: "#FFFFFF",
            bgColor: "bg-[rgba(255,255,255,0.05)]",
            title: "Account Information",
            description: "Your account details and linked services",
            linkText: "Link Twitter",
            linkColor: "text-[rgba(255,255,255,0.50)]",
            borderColor: "border-[rgba(255,255,255,0.20)]",
        },
    ];

    return (
        <div className="bg-[rgba(255,255,255,0.05)] rounded-[15px] overflow-hidden p-[30px] md:p-[15px] mb-[30px] md:mb-[20px]">
            {/* Header */}
            <div className="flex items-center justify-start gap-[10px]">
                <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[15px] flex items-center justify-center text-[#FFF] bg-[rgba(255,255,255,0.10)]">
                    <Icon icon="iconoir:user-star" width="24" height="24" />
                </div>
                <div className="relative">
                    <h4 className="text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]">
                        Account Information
                    </h4>
                    <p className="text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]">
                        Your account details and linked services
                    </p>
                </div>
            </div>

            {/* Items */}
            {accountItems.map((item) => (
                <div
                    key={item.id}
                    className={`flex items-center justify-between sm:flex-col sm:justify-start sm:items-start gap-[10px] ${item.bgColor} px-[15px] py-[10px] rounded-[15px] mt-[20px]`}
                >
                    <div className="flex items-center justify-start gap-[20px]">
                        <div className={`text-[${item.iconColor}]`}>
                            <Icon icon={item.icon} width="24" height="24" />
                        </div>
                        <div className="relative">
                            <h4 className="text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]">
                                {item.title}
                            </h4>
                            <p className="text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className={`flex items-center sm:ml-[45px] justify-center h-[27px] px-[10px] ${item.linkColor} text-[16px] font-[700] space-grotesk border-[1px] bg-[rgba(255,255,255,0.05)] rounded-[8px] ${item.borderColor}`}
                    >
                        {item.linkText}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AccountInfo;
