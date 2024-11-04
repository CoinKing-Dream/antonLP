import Ticket from "./Ticket";

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

  if(windowSize.width<1281) return true;
  return false;
}

const PlayMethod = ({order, title, content}) => {
    const isTiny = useWindowSize();
    
    const ticketComponents = Array.from({length: order}, (_, index) => 
        <div key={index} className="z-[10] absolute w-[65px] h-[65px] md:w-[80px] md:h-[80px] xl:w-[120px] xl:h-[120px] left-0 top-0" style={{transform: `translate(15%, 15%) rotate(${180-((index==1)?90:(360/order))*index}deg)`}}>
          <Ticket rotate={347} isSmall={false} isTiny={isTiny}/>
        </div>
      );

    return (
        <div className="flex sm:flex-col flex-row items-center sm:justify-center sm:items-center 2xl:w-[300px] sm:w-[30%] w-full gap-1 sm:gap-5">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center z-1 w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full bg-[#40404080] relative">
                  <div className="absolute z-[-100] w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full bg-[#000000]"></div>
                {
                    ticketComponents
                }    
                    <div className="z-[100] w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] xl:w-[100px] xl:h-[100px] rounded-full bg-[#404040] flex justify-center items-center">
                        <span className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px]">{order}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 w-full">
                <div className="text-[15px] sm:text-[15px] md:text-[20px] lg:text-[30px] text-center">{title}</div>
                <div className="text-[10px] sm:text-[10px] md:text-[15px] lg:text-[20px] text-center">{content}</div>
            </div>
        </div>
    )
}

export default PlayMethod;