import React, { useState } from 'react';
import HomeSectionTitle from '../HomeSectionTitle';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // Optional CSS for styling

const faqData = [
    {
        id: 1,
        title: 'What is Knidos?',
        content: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example.',
        content2: 'which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.'
    },
    {
        id: 2,
        title: 'How do the investment pools work?',
        content: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example.',
        content2: 'which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.'
    },
    {
        id: 3,
        title: 'Why we should choose Exon ?',
        content: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example.',
        content2: 'which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.'
    },
    {
        id: 4,
        title: 'Is this support fiat payment ?',
        content: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example.',
        content2: 'which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.'
    },
    {
        id: 5,
        title: 'How secure is this token ?',
        content: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example.',
        content2: 'which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.'
    },
    {
        id: 6,
        title: 'What is your contract address ?',
        content: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example.',
        content2: 'which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.'
    },
];


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='pb-[105px] mt-[-40px] lg:py-[70px] md:pt-[40px] md:pb-[70px] sm:pb-[50px] relative z-10' id="faq">
            <div className="px-[20px] md:px-[14px] max-w-[1210px] mx-auto lg:max-w-[720px]">
                <div className='max-w-[375px] mx-auto mb-[30px]'>
                    <HomeSectionTitle title="Frequently Asked Questions" alignment="text-center" />
                </div>
                <div className='max-w-[770px] mx-auto'>
                    <Accordion allowZeroExpanded={true}>
                        {faqData.map((faq, index) => (
                            <AccordionItem 
                                key={faq.id} 
                                className={`mb-[15px] rounded-[20px] bg-[rgba(255,255,255,0.05)] relative faq-accordion-item ${activeIndex === index ? 'active' : ''}`}
                                uuid={faq.id}
                            >
                                <AccordionItemHeading onClick={() => toggleActiveItem(index)} className='relative z-10'>
                                    <AccordionItemButton 
                                        className='text-[20px] md:text-[18px] sm:text-[16px] space-grotesk font-[700] pl-[30px] py-[20px] pr-[60px] leading-[136%] text-[rgba(255,255,255,0.90)] flex justify-between items-center accordion-item-btn'
                                    >
                                        {faq.title}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='px-[30px] py-[0px] pb-[20px] text-[16px] md:text-[14px] md:leading-[200%] text-[rgba(255,255,255,0.90)] relative z-10'>
                                    <p>{faq.content}</p>
                                    {faq.content2 && <p>{faq.content2}</p>}
                                    {faq.content3 && <p>{faq.content3}</p>}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
