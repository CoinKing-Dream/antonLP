import partnersImg from "../assets/partner-1.png";

const Partners = () => {
    return (
        <div className="partner-panel-color rounded-lg flex flex-row justify-left w-[90%] p-[50px] gap-20">
            <div className="bg-[#40404080] w-[30%] h-[200px] rounded-lg flex items-center justify-center">
                <img src={partnersImg} />
            </div>
            <div className="bg-[#40404080] w-[30%] h-[200px] rounded-lg flex items-center justify-center">
            </div>
        </div>
    )
}

export default Partners;