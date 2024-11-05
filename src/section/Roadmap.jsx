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

  if (windowSize.width >= 1280) return {leftMoveValue:110, topMoveValue:200};
  else if (windowSize.width >= 1024) return {leftMoveValue:85, topMoveValue:175};
  else if (windowSize.width >= 768) return {leftMoveValue:50, topMoveValue:170};
  else if (windowSize.width >= 640) return {leftMoveValue:80, topMoveValue:168};
  else return {leftMoveValue:45, topMoveValue:206};
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
    const {leftMoveValue, topMoveValue} = useWindowSize();

    return (
        <div className="flex flex-col gap-[30px] bg-[#4040404D] px-[10px] lg:px-[10px] xl:px-[20px] pt-[5px] sm:pt-[15px] lg:pt-[7px] xl:pt-[10px] rounded-[20px] relative h-fit sm:h-[770px] lg:h-[845px] xl:h-[932px] xl:w-[626px] md:w-[46vw] w-[90vw] max-w-[500px]">
        {
            roadMap.map((item, index) => {
                return (
                    <>
                        <div className="flex flex-row gap-[10px] justify-between items-center">
                            <div className={`xl:text-[18px] lg:text-[15px] md:text-[13px] sm:text-[15px] text-[12px] text-center md:p-2 xl:w-[210px] lg:w-[155px] md:w-[90px] sm:w-[150px] w-[80px] h-[80px] flex justify-center items-center px-0 rounded-[10px] lg:rounded-[15px] xl:rounded-[20px] ${item.now>index?"bg-[#EF7384]":"bg-[#4040404D]"}`}>{item.date}</div>
                            <div className={`relative flex flex-col gap-3 sm:gap-5 justify-center items-center sm:w-[340px] md:w-[80%] w-[80%] lg:w-[280px] xl:w-[300px] h-[190px] sm:h-[133px] md:h-[134px] lg:h-[150px] xl:h-[171px] overflow-hidden bg-[#4040404D] p-[10px] rounded-[20px]`}>
                                <div className={`${index==4&&"blur-md select-none"} lg:text-[${item.now<=index?20:15}px] md:text-[${item.now<=index?15:12}px] text-center max-w-[70%]`}>{item.title}</div>
                                <div className={`${index==4&&"blur-sm select-none"} text-[12px] md:text-[10px] lg:text-[12px] text-center`}>{item.content}</div>
                                <img className={`absolute top-[25px] right-[10px] ${index>=3?"md:top-[30px] sm:top-[10px] top-[20px]":"top-[5px]"} sm:right-[1px] w-[30px] sm:w-[40px]`} src={item.icon}/>
                            </div>
                        </div>
                        <div className={`flex flex-col justify-center items-center absolute z-[-100]`} 
                            style={{top: `${index?topMoveValue*index-65:topMoveValue*index}px`, left: `${index?leftMoveValue:leftMoveValue-20}px`}}>
                        {
                            !index?
                                <div className="relative">
                                    <img src={campImg} className="xl:w-[50px] w-[40px]"/>
                                    <div className="campPanel absolute bottom-[-20px] sm:bottom-[-6.1px] left-[16px] lg:left-[16px] xl:left-[21px] w-[8px] h-[26px] sm:h-[13px] bg-[#8A5300E5]"></div>
                                </div>:
                                ((item.now>index)&&<div className="w-[8px] h-[180px] sm:h-[105px] md:h-[110px] lg:h-[125px] bg-[#EF7384]"></div>)||
                                ((item.now==index)&&<div className="w-[8px] h-[180px] sm:h-[105px] md:h-[110px] lg:h-[125px] bg-gradient-to-b from-[#EF7384E5] to-[#4040404D]"></div>)||
                                ((item.now<index)&&<div className="w-[8px] h-[180px] sm:h-[105px] md:h-[110px] lg:h-[125px] bg-[#4040404D]"></div>)
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