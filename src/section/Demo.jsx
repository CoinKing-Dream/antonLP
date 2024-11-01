import demo from "../assets/demo.png";
import ticket from "../assets/ticket.gif";

const Demo = () => {
    return (
        <div className="flex bg-[#4040404D] px-[40px] py-[10px] rounded-[20px] relative h-[942px]">
            <img src={demo}/>
            <img className="absolute top-[35%] left-[15%]" src={ticket} alt="ticket" width={400}/>
            <div className="rounded-full w-[30px] h-[30px] absolute top-[45%] right-[25%] text-[25px] bg-red-500 flex justify-center items-center">99</div>
        </div>
    )
}

export default Demo;