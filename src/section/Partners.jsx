import partnersImg from "../assets/partner-1.png";

const Partners = () => {
    return (
        <div className="partner-panel-color rounded-lg flex flex-row flex-wrap justify-around w-[90%] p-[50px] gap-1">
            <div className="bg-[#40404080] w-[429px] h-[200px] rounded-[20px] flex items-center justify-center">
                <img src={partnersImg} />
            </div>
            <div className="bg-[#40404080] w-[429px] h-[200px] rounded-[20px] flex items-center justify-center">
            <img src={partnersImg} />
            </div>
        </div>
    )
}

export default Partners;