import demo from "../assets/demo.png";
import ticket from "../assets/ticket.gif";

const Demo = () => {
    return (
        <div className="flex justify-center items-center bg-[#4040404D] rounded-[30px] relative md:h-[942px] md:w-[642px] w-[90%]">
            <img src={demo} className="w-[80%] md:w-[75%]"/>
            <img className="absolute top-[35%] w-[50%] md:w-[400px]" src={ticket} alt="ticket"/>
            <div className="rounded-full w-[20px] h-[20px] md:w-[30px] md:h-[30px] absolute top-[45%] right-[25%] text-[20px] md:text-[25px] bg-red-500 flex justify-center items-center">99</div>
        </div>
    )
}

export default Demo;