import partnersImg from "../assets/partner-1.png";

const Partners = () => {
  return (
    <div className="partner-panel-color rounded-lg flex flex-row flex-wrap content-baseline lg:justify-start justify-center w-[90%] p-[20px] md:p-[50px] gap-[20px] sm:gap-[40px] md:gap-[50px]">
      <div
        className="bg-[#40404080] w-[30%] h-[10vw] max-w-[429px] max-h-[200px] min-w-[229px] min-h-[150px] rounded-[20px] flex items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="easing-in-out"
      >
        <img src={partnersImg} className="w-[50%]" />
      </div>
      <div
        className="bg-[#40404080] w-[30%] h-[10vw] max-w-[429px] max-h-[200px] min-w-[229px] min-h-[150px] rounded-[20px] flex items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="easing-in-out"
      ></div>
    </div>
  );
};

export default Partners;
