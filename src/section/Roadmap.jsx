import developmentIcon from "../assets/1_development.png";
import tgMiniappIcon from "../assets/2_tgminiapp.png";
import partnershipIcon from "../assets/3_partnership.png";
import memecoinIcon from "../assets/4_memecoin.png";
import chainsIcon from "../assets/5_chains.png";

import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize(); // Call it initially

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and unmount

  if (windowSize.width >= 1280) return 160;
  else if (windowSize.width >= 640) return 90;
  else return 55;
}

const roadMap = [{
    date: "OCTOBER 2024",
    title: "Development",
    content: "During 3 three months we have been actively developing the TonTickets, carefully thinking over each of its functions.",
    icon: developmentIcon,
    now: 2
}, {
    date: "NOVEMBER 2024",
    title: "Release Mini-App",
    content: "After a lot of tests, tweaks, improvements, implementation of many technologies, we are ready to present a convenient and safe platform for users.",
    icon: tgMiniappIcon,
    now: 2
}, {
    date: "DDECEMBER 2024",
    title: "Partners",
    content: "Increasing the base of tokens, nfs and other prizes. Getting support from big brothers from TON and not only. Adding new mechanics.",
    icon: partnershipIcon,
    now: 2
}, {
    date: "MARCH 2025",
    title: "Meme-Coin Platform",
    content: "Finish Building of an innovative memcoin platform on TON  ",
    icon: memecoinIcon,
    now: 2
}, {
    date: "APRIL 2025",
    title: "Listing",
    content: "Listing on CEX :) Your Bunny Wrote",
    icon: chainsIcon,
    now: 2
}]

import campImg from "../assets/camp.png";

const Roadmap = () => {
    const leftMoveValue = useWindowSize();

    return (
        <div className="flex flex-col gap-[30px] bg-[#4040404D] px-[10px] lg:px-[20px] py-[10px] rounded-[20px] relative h-[942px]">
        {
            roadMap.map((item, index) => {
                return (
                    <>
                        <div className="flex flex-row gap-[20px] justify-center items-center">
                            <div className={`xl:text-[25px] sm:text-[15px] text-[10px] xl:w-[280px] sm:w-[150px] w-[100px] h-[80px] flex justify-center items-center px-0 rounded-[20px] ${item.now>index?"bg-[#EF7384]":"bg-[#4040404D]"}`}>{item.date}</div>
                            <div className={`relative flex flex-col gap-5 justify-center items-center w-[200px] sm:w-[300px] h-[171px] overflow-hidden bg-[#4040404D] p-[10px] rounded-[20px]`}>
                                <div className={`${index==4&&"blur-md select-none"} text-[${item.now<=index?25:20}px] text-center`}>{item.title}</div>
                                <div className={`${index==4&&"blur-sm select-none"} text-[10px] sm:text-[15px] text-center`}>{item.content}</div>
                                <img className="absolute top-[25px] right-[1px] sm:top-[1px] sm:right-[1px] w-[20px] sm:w-[50px]" src={item.icon}/>
                            </div>
                        </div>
                        <div className={`flex flex-col absolute`} 
                            style={{top: `${index?200*index-65:200*index}px`, left: `${index?leftMoveValue:leftMoveValue-20}px`}}>
                        {
                            !index?
                                <div className="relative">
                                    <img src={campImg} />
                                    <div className="campPanel absolute bottom-[-6.1px] left-[21px] w-[8px] h-[13px] bg-[#8A5300E5]"></div>
                                </div>:
                                ((item.now>index)&&<div className="w-[8px] h-[125px] bg-[#8A5300E5]"></div>)||
                                ((item.now==index)&&<div className="w-[8px] h-[125px] bg-gradient-to-b from-[#8A5300E5] to-[#4040404D]"></div>)||
                                ((item.now<index)&&<div className="w-[8px] h-[125px] bg-[#4040404D]"></div>)
                        }
                        </div>
                    </>
                )
            })
        }
            
        </div>
    )
}

export default Roadmap;