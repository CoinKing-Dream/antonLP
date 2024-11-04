import demo from "../assets/demo.png";
import ticket from "../assets/ticket.gif";

const Demo = () => {
    return (
        <div className="flex justify-center items-center bg-[#4040404D] rounded-[30px] relative sm:h-[942px] 2xl:w-[626px] sm:w-[40vw] w-[320px] px-[20px] py-[10px]">
            <img src={demo}/>
            <div className="absolute top-[40%] w-[50%] xl:w-[300px] p-[10px] border-2 border-[#000000]">
                <img src={ticket} alt="ticket"/>
            </div>
            <div className="rounded-full w-[20px] h-[20px] md:w-[30px] md:h-[30px] absolute top-[45%] right-[25%] text-[20px] md:text-[25px] bg-red-500 flex justify-center items-center">99</div>
        </div>
    )
}

export default Demo;