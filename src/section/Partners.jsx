import partnersImg from "../assets/partner-1.png";

const Partners = () => {
    return (
        <div className="partner-panel-color rounded-lg flex flex-row flex-wrap justify-left w-[90%] p-[50px] gap-[20px] sm:gap-[40px] md:gap-[50px]">
            <div className="bg-[#40404080] w-[320px] h-[150px] sm:w-[350px] sm:h-[170px] md:w-[429px] md:h-[200px] rounded-[20px] flex items-center justify-center">
                <img src={partnersImg} className="w-[50%]"/>
            </div>
            <div className="bg-[#40404080] w-[320px] h-[150px] sm:w-[350px] sm:h-[170px] md:w-[429px] md:h-[200px] rounded-[20px] flex items-center justify-center">
            
            </div>
        </div>
    )
}

export default Partners;