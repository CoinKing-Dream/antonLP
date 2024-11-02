import Ticket from "./Ticket";

const PlayMethod = ({order, title, content}) => {
    const ticketComponents = Array.from({length: order}, (_, index) => 
        <div key={index} className="z-100 absolute w-[120px] h-[120px] left-0 top-0" style={{transform: `translate(15%, 15%) rotate(${180-((index==1)?90:(360/order))*index}deg)`}}>
          <Ticket rotate={347} isSmall={false}/>
        </div>
      );

    return (
        <div className="z-[100] flex flex-col items-center w-[400px] gap-5">
            <div>
                <div className="z-100 w-[150px] h-[150px] rounded-full bg-[#40404080] relative">
                {
                    ticketComponents
                }    
                    <div className="w-[100px] h-[100px] rounded-full bg-[#404040] absolute top-[25px] left-[25px] flex justify-center items-center">
                        <span className="text-[40px]">{order}</span>
                    </div>
                </div>
            </div>
            <div className="text-[30px]">{title}</div>
            <div className="text-[20px] text-center">{content}</div>
        </div>
    )
}

export default PlayMethod;