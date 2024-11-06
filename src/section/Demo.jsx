import downmenu_mark from "../assets/downmenu_mark.png";
import ticket from "../assets/ticket.gif";
import ticket_1 from "../assets/ticket-1.png";
import ticket_2 from "../assets/ticket-2.png";
import ticket_3 from "../assets/logo.png";
import menu_2 from "../assets/menu-2.png";
import menu_3 from "../assets/menu-3.png";
import menu_4 from "../assets/menu-4.png";

const Demo = () => {
    return (
        <div className="flex justify-center items-start gap-5 bg-[#4040404D] rounded-[30px] relative h-[770px] lg:h-[845px] xl:h-[932px] xl:w-[626px] md:w-[46vw] w-[90vw] max-w-[500px] px-[20px] py-[10px]">
            <div className="flex flex-col items-center gap-3 w-full demo-panel-background rounded-[20px] h-[750px] lg:h-[825px] xl:h-[912px] relative">
                <div className="flex flex-row justify-between items-center font-['Inter'] w-full p-5 text-[15px] sm:text-[15px] lg:text-[20px]">
                    <div className="flex flex-row bg-[#404040] px-3 rounded-[12px]">🎁&nbsp;Prizes</div>
                    <div className="flex flex-row items-center justify-center gap-2 bg-[#404040] px-3 rounded-[12px] gap-1">
                        <div>UDjS...KONt</div>
                        <img src={downmenu_mark} className="h-[15px]"/>
                    </div>
                </div>
                <div className="w-[95%] h-[5.62px] demo-horizontal-bar"></div>
                <div className="w-[95%] h-[50px] rounded-lg demo-button flex justify-center">
                    <button className="flex flex-row items-center justify-center gap-2 border-x-4 border-black border-dashed h-[50px] w-[70%] text-[20px] lg:text-[25px]">
                        <div>Get Tickets</div>
                        <img src={downmenu_mark} />
                    </button>
                </div>
                <div className="flex flex-row justify-between items-center text-[20px] lg:text-[30px] w-[95%]">
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <div>99</div>
                        <img src={ticket_1} />
                    </div>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <div>1.25</div>
                        <img src={ticket_2} />
                    </div>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <div>225</div>
                        <div className="ticket-3-background rounded-full w-[32px] h-[32px] flex justify-center items-center">
                            <img src={ticket_3} className="w-[14px] h-[14px]"/>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg text-[20px] lg:text-[30px] bg-[#565656] px-[10px] md:px-[15px] lg:px-[30px] py-[20px] mt-[80px] sm:mt-[50px] md:mt-[80px] mb-[50px]">You Win 1.26 TON</div>
                <div className="min-w-[200px] w-[50%] xl:w-[300px] p-[5px]">
                    <img src={ticket} alt="ticket"/>
                </div>
                <div className="absolute bottom-0 mt-[35px] sm:mt-[50px] bg-[#40404066] w-full flex flex-row justify-between items-center rounded-b-[20px] text-[10px] sm:text-[15px] ">
                    <div className="flex flex-col justify-center items-center bg-black pb-[10px] pt-[15px] px-[10px] rounded-[10px] md:pt-[20px] md:px-[10px] md:rounded-[15px] xl:pt-[25px] xl:px-[20px] xl:rounded-[20px]">
                        <img src={ticket_1}/>
                        <div>Tickets</div>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-[10px] pt-[15px] px-[10px] rounded-[10px] md:pt-[20px] md:px-[10px] md:rounded-[15px] xl:pt-[25px] xl:px-[20px] xl:rounded-[20px]">
                        <img src={menu_2}/>
                        <div>Friends</div>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-[10px] pt-[15px] px-[10px] rounded-[10px] md:pt-[20px] md:px-[10px] md:rounded-[15px] xl:pt-[25px] xl:px-[20px] xl:rounded-[20px]">
                        <img src={menu_3}/>
                        <div>Prizes</div>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-[10px] pt-[15px] px-[10px] rounded-[10px] md:pt-[20px] md:px-[10px] md:rounded-[15px] xl:pt-[25px] xl:px-[20px] xl:rounded-[20px]">
                        <img src={menu_4}/>
                        <div>Tasks</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo;