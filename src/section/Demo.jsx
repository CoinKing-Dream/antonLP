import demo from "../assets/demo.png";
import ticket from "../assets/ticket.gif";

const Demo = () => {
    return (
        <div className="flex justify-center items-center bg-[#4040404D] rounded-[30px] relative h-[942px] w-[642px]">
            <img src={demo}/>
            <img className="absolute top-[35%]" src={ticket} alt="ticket" width={400}/>
            <div className="rounded-full w-[30px] h-[30px] absolute top-[45%] right-[25%] text-[25px] bg-red-500 flex justify-center items-center">99</div>
        </div>
    )
}

export default Demo;