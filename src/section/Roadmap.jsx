const roadMap = [{
    date: "OCTOBER 2024",
    title: "Development",
    content: "During 3 three months we have been actively developing the TonTickets, carefully thinking over each of its functions.",
    icon: "",
    now: 2
}, {
    date: "NOVEMBER 2024",
    title: "Release Mini-App",
    content: "After a lot of tests, tweaks, improvements, implementation of many technologies, we are ready to present a convenient and safe platform for users.",
    icon: "",
    now: 2
}, {
    date: "DDECEMBER 2024",
    title: "Partners",
    content: "Increasing the base of tokens, nfs and other prizes. Getting support from big brothers from TON and not only. Adding new mechanics.",
    icon: "",
    now: 2
}, {
    date: "MARCH 2025",
    title: "Meme-Coin Platform",
    content: "Finish Building of an innovative memcoin platform on TON  ",
    icon: "",
    now: 2
}, {
    date: "APRIL 2025",
    title: "Listing",
    content: "Listing on CEX :) Your Bunny Wrote",
    icon: "",
    now: 2
}]

import campImg from "../assets/camp.png";

const Roadmap = () => {
    return (
        <div className="flex flex-col gap-[30px] bg-[#4040404D] px-[20px] py-[10px] rounded-[20px] relative h-[942px]">
        {
            roadMap.map((item, index) => {
                return (
                    <>
                        <div className="flex flex-row gap-[20px] justify-center items-center">
                            <div className={`text-[25px] w-[300px] h-[80px] flex justify-center items-center px-0 rounded-[20px] ${item.now>index?"bg-[#8A5300E5]":"bg-[#4040404D]"}`}>{item.date}</div>
                            <div className="flex flex-col gap-5 justify-center items-center w-[300px] h-[171px] overflow-hidden bg-[#4040404D] p-[10px] rounded-[20px]">
                                <div className={`text-[${item.now<=index?25:20}px]`}>{item.title}</div>
                                <div className="text-[15px] text-center">{item.content}</div>
                            </div>
                            
                        </div>
                        <div className={`flex flex-col absolute`} style={{top: `${index?200*index-65:200*index}px`, left: `${index?160:140}px`}}>
                        {
                            !index?
                                <><img src={campImg} /><div className="w-[8px] h-[15px] bg-[#8A5300E5]"></div></>:
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