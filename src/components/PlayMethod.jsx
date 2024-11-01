import Ticket from "./Ticket";

const PlayMethod = ({order, title, content}) => {
    return (
        <div className="flex flex-col items-center max-w-[300px] w-[20%] gap-5">
            <div>
                <div className="w-[150px] h-[150px] rounded-full bg-[#40404080] relative">
                    {/* {

                        Array.from({length: order}, (_, index) => { */}
                            <div className="absolute w-[120px] h-[120px] left-0 top-0" style={{transform: `translate(15%, 15%) rotate(${180-120*1}deg)`}}>
                                <Ticket rotate={347} isSmall={false}/>
                            </div>
                        {/* }) */}
                    {/* } */}
                    
                    <div className="w-[100px] h-[100px] rounded-full bg-[#404040] absolute top-[25px] left-[25px] flex justify-center items-center">
                     <span className="text-[40px]">{order}</span>
                    </div>
                </div>
            </div>
            <div className="text-[30px]">{title}</div>
            <div className="text-[20px]">{content}</div>
        </div>
    )
}

export default PlayMethod;