import AOS from "aos";
import "aos/dist/aos.css";

import logo from "./assets/logo.png";
import email from "./assets/email.svg";
import twitter from "./assets/twitter.svg";
import telegram from "./assets/telegram.svg";
import partnerImg from "./assets/partner.png";

import OnChainData from "./components/OnchainData";
import PlayMethod from "./components/PlayMethod";
import Demo from "./section/Demo";
import Roadmap from "./section/Roadmap";
import ForDevs from "./section/ForDevs";
import Partners from "./section/Partners";
import Ticket from "./components/Ticket";

import { useState, useEffect } from "react";

const onChainData = [
  {
    value: "210.298",
    name: "Onchain Txs",
  },
  {
    value: "39.021",
    name: "Onchain Users",
  },
  {
    value: "90.305",
    name: "Total Users",
  },
  {
    value: "15.395",
    name: "Daily Users",
  },
  {
    value: "286.873",
    name: "Open Tickets",
  },
];

const playMethodData = [
  {
    title: "Registration",
    content: (
      <>
        Open <span className="text-[#EC7480E5]">Ton Tickets Bot</span> and
        connect your TON wallet
      </>
    ),
  },
  {
    title: "Your first ticket",
    content: (
      <>
        After you connect ton wallet you will get your first{" "}
        <span className="text-[#EC7480E5]">FREE</span> ticket
      </>
    ),
  },
  {
    title: "Deposit",
    content: (
      <>
        To buy more tickets you need to tap on button “
        <span className="text-[#EC7480E5]">Get Tickets</span>” and deposit ton
        or another coins, and after you can buy more tickets
      </>
    ),
  },
  {
    title: "Play!",
    content: (
      <>
        Great, now you've got tickets, hurry up open them and enjoy{" "}
        <span className="text-[#EC7480E5]">&lt;3</span>
      </>
    ),
  },
];

function App() {
  const [isScrollDown, SetIsScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      SetIsScrollDown(window.scrollY > 10 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center relative mb-[80px] sm:mb-[40px] md:mb-0">
        <div className="w-full relative overflow-hidden">
          <div className="absolute top-[150px] sm:top-0 right-[100px] sm:right-[200px] z-[-1] radial-gradient-1 max-w-[1000px] lg:w-[80vw] lg:h-[1600px] md:w-[60vw] md:h-[1200px] sm:w-[40vw] sm:h-[1000px] w-[40vw] h-[600px]"></div>
          <div
            className={`w-full flex justify-center items-center fixed z-[10000] border-b-2 border-white transition-all duration-1000 ease-out ${
              isScrollDown
                ? "bg-black opacity-90 h-[70px] sm:h-[90px] md:h-[110px] lg:h-[130px]"
                : "bg-transparent h-[100px] sm:h-[120px] md:h-[130px] lg:h-[150px]"
            }`}
          >
            <img
              src={logo}
              alt="logo"
              className={`${
                !isScrollDown
                  ? "w-[50px] lg:w-[100px] md:w-[80px] sm:w-[70px] h-[50px] sm:h-[70px] md:h-[80px] lg:h-[100px]"
                  : "w-[40px] lg:w-[80px] md:w-[60px] sm:w-[50px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[80px]"
              }`}
            />
          </div>
          <div
            className="mt-[100px] sm:mt-[120px] md:mt-[130px] lg:mt-[150px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="easing-in-out"
          >
            <div className="flex justify-center">
              <div className="max-w-[2000px] min-w-[300px] w-[90%] rounded-[20px] my-[10px] sm:my-[20px] md:my-[30px] lg:my-[80px] mx-[10%] text-center bg-[#D9D9D920] p-[10px]">
                <div className="w-full border-2 border-solid border-gray-500 rounded-[10px] sm:rounded-[20px] uppercase leading-normal tracking-widest text-[10px] sm:text-[15px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] py-3 px-[30px]">
                  TonTickets is a telegram mini-app in where people can win many
                  different prizes ranging from popular memecoins to the rarest
                  and most expensive NFT on TON chain
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-[100px] my-[30px] sm:my-[50px] md:my-[80px]">
            <div
              className="relative max-w-[800px] w-[35%] min-w-[300px] text-center flex flex-col items-center mb-[2px] lg:mb-[50px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="easing-in-out"
            >
              <div className="absolute z-10 right-[-20px] top-[-20px] sm:right-[-15px] sm:top-[-20px] md:right-[-20px] md:top-[-20px] lg:right-[-15px] lg:top-[-20px] xl:right-[-10px] xl:top-[-20px]">
                <Ticket rotate={20.92} size={{width: "48.48px", height: "43.09px"}} />
              </div>
              <div className="absolute z-10 left-[-15px] top-[25px] sm:left-[-20px] sm:top-[40px] md:left-[-10px] md:top-[45px] lg:left-[-10px] lg:top-[60px] xl:left-[-10px] xl:top-[80px]">
                <Ticket rotate={-31.95} size={{width: "48.48px", height: "43.09px"}} />
              </div>
              <button className="w-full cursor-pointer absolute z-20 gradient-button rounded-[10px] lg:rounded-[15px] md:px-px-[40px] lg:px-[50px] py-[15px] sm:py-[20px] md:py-[20px] lg:py-[30px] outline outline-offset-2 outline-2 outline-[#720000] text-[15px] md:text-[18px] xl:text-[25px] 2xl:text-[30px]">
                Get Tickets Win Prizes
              </button>
            </div>
            <div
              className="max-w-[1850px] w-[300px] sm:w-[600px] lg:w-[90%] my-[20px] sm:my-[60px] md:my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B595980] to-[#2B2B2B80] p-[10px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="easing-in-out"
            >
              <div className="w-full h-full z-[-1] border-2 border-solid border-gray-500 rounded-[10px] sm:rounded-[20px] uppercase leading-normal tracking-widest text-[13px] sm:text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[25px] px-[10px] pt-[50px] pb-[10px] relative">
                <div className="absolute z-[-100] left-[20px] top-0 sm:block hidden">
                  <Ticket rotate={327} size={{width: "41.81px", height: "37.07px"}}/>
                </div>
                <div className="absolute z-[-100] left-[20%] top-0 sm:block hidden">
                  <Ticket rotate={193} size={{width: "41.81px", height: "37.07px"}}/>
                </div>
                <div className="absolute z-[-100] left-[50%] top-0 sm:block hidden">
                  <Ticket rotate={20.92} size={{width: "41.81px", height: "37.07px"}}/>
                </div>
                <div className="absolute z-[-100] left-[65%] top-0 sm:block hidden">
                  <Ticket rotate={347} size={{width: "41.81px", height: "37.07px"}}/>
                </div>
                <div className="absolute z-[-100] left-[80%] top-0 sm:block hidden">
                  <Ticket rotate={354} size={{width: "51.14px", height: "45.26px"}}/>
                </div>
                <div className="absolute z-[-1000] right-[10px] top-0 sm:block hidden">
                  <Ticket rotate={170.18} size={{width: "41.81px", height: "37.07px"}}/>
                </div>

                <div className="absolute z-[-10000] left-[40%] top-[40%] sm:block hidden">
                  <Ticket rotate={343} size={{width: "51.14px", height: "45.26px"}}/>
                </div>
                <div className="absolute z-[-10000] left-[72%] top-[40%] sm:block hidden">
                  <Ticket rotate={27} size={{width: "41.81px", height: "37.07px"}}/>
                </div>

                <div className="absolute z-[-100] left-[16%] bottom-0 sm:block hidden">
                  <Ticket rotate={20.55} size={{width: "51.14px", height: "45.26px"}}/>
                </div>
                <div className="absolute z-[-1] left-[35%] bottom-0 sm:block hidden">
                  <Ticket rotate={216} size={{width: "41.81px", height: "37.07px"}}/>
                </div>
                <div className="absolute z-[-100] left-[55%] bottom-0 sm:block hidden">
                  <Ticket rotate={250.62} size={{width: "51.14px", height: "45.26px"}}/>
                </div>
                <div className="absolute z-[-100] left-[80%] bottom-0 sm:block hidden">
                  <Ticket rotate={8.22} size={{width: "51.14px", height: "45.26px"}}/>
                </div>
              {/* ------------------------------------------------------------------ */}
                <div className="absolute z-[-100] left-[0] top-[10px] sm:hidden block">
                  <Ticket rotate={-35} size={{width: "51.14px", height: "45.26px"}}/>
                </div>
                <div className="absolute z-[-100] right-[20px] top-0 sm:hidden block">
                  <Ticket rotate={20.92} size={{width: "41.81px", height: "37.07px"}}/>
                </div>

                <div className="absolute z-[-100] right-[60px] top-[70px] sm:hidden block">
                  <Ticket rotate={20.92} size={{width: "51.14px", height: "45.26px"}}/>
                </div>

                <div className="absolute z-[-100] left-[50px] top-[120px] sm:hidden block">
                  <Ticket rotate={20.92} size={{width: "41.81px", height: "37.07px"}}/>
                </div>

                <div className="absolute z-[-100] left-[15px] bottom-[150px] sm:hidden block">
                  <Ticket rotate={20.92} size={{width: "51.14px", height: "45.26px"}}/>
                </div>

                <div className="absolute z-[-100] right-[15px] bottom-[150px] sm:hidden block">
                  <Ticket rotate={-20.92} size={{width: "51.14px", height: "45.26px"}}/>
                </div>

                <div className="absolute z-[-100] left-[120px] bottom-[100px] sm:hidden block">
                  <Ticket rotate={80.92} size={{width: "41.81px", height: "37.07px"}}/>
                </div>

                <div className="absolute z-[-100] left-[10px] bottom-[10px] sm:hidden block">
                  <Ticket rotate={20.92} size={{width: "41.81px", height: "37.07px"}}/>
                </div>

                <div className="absolute z-[-100] right-[10px] bottom-[10px] sm:hidden block">
                  <Ticket rotate={-20.92} size={{width: "41.81px", height: "37.07px"}}/>
                </div>
                
                <div className="flex flex-row flex-wrap justify-around items-center gap-[40px] sm:gap-[50px] lg:gap-[40px] lx:gap-[60px]">
                  {onChainData.map((item) => {
                    return <OnChainData name={item.name} value={item.value} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center gap-[50px] md:gap-[100px] z-[100] w-full"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="easing-in-out"
          >
            <div className="z-[100] text-[20px] sm:text-[30px] md:text-[35px] mt-0">
              How to start play?
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center sm:items-start sm:justify-around  gap-5 sm:gap-[50px] relative w-[90%]">
              <div className="sm:h-[1px] sm:w-[80%] h-[400px] left-[40px] w-[1px] sm:left-[50px] md:left-[100px] lg:left-[150px] bg-[#404040] z-[-1000] absolute top-[40px] md:top-[50px] lg:top-[49px] xl:top-[80px]"></div>
              {playMethodData.map((item, index) => {
                return (
                  <PlayMethod
                    order={index + 1}
                    title={item.title}
                    content={item.content}
                    data-aos="fade-up"
                    data-aos-delay={`${index*1000}`}
                    data-aos-easing="easing-in-out"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="radial-gradient-2 mt-[50px] sm:mt-[60px] md:mt-[100px] z-[1000] flex md:flex-row md:justify-around flex-col gap-[50px] md:gap-1 w-full max-w-[1500px]">
          <div
            className="flex flex-col items-center gap-[20px] sm:gap-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="easing-in-out"
          >
            <p className="text-[20px] sm:text-[30px] md:text-[35px]">Demo</p>
            <Demo />
          </div>
          <div
            className="flex flex-col items-center gap-[20px] sm:gap-[50px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="easing-in-out"
          >
            <p className="text-[20px] sm:text-[30px] md:text-[35px]">RoadMap</p>
            <Roadmap />
          </div>
        </div>

        <div
          className="relative flex flex-col py-[20px] sm:py-[100px] lg:py-[150px] gap-5 w-[90%] items-center overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="easing-in-out"
        >
          <div className="absolute z-[-1] radial-gradient-3 w-[50vw] h-[900px] top-[50px] rotate-[-20deg] sm:rotate-[-35deg] sm:w-[500px] sm:h-[1000px] sm:top-[120px] sm:left-[5vw] md:w-[500px] md:h-[1400px] md:left-[10vw] lg:w-[700px] md:top-[50px] lg:h-[1400px] lg:left-[10vw] lg:top-[50px]"></div>
          <div className="flex flex-row gap-2 mt-[50px] mb-[5px] sm:my-[50px]">
            <span className="text-[20px] sm:text-[30px] md:text-[35px]">
              Partners
            </span>
            <img className="w-[25px] sm:w-[50px]" src={partnerImg} />
          </div>
          <Partners />
        </div>
        <div className="flex flex-col items-center justify-center w-full relative overflow-hidden">
          <div
            className="flex flex-col my-[20px] sm:my-[50px] w-[90%] items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="easing-in-out"
          >
            <div className="text-[20px] sm:text-[30px] md:text-[35px] mb-[30px] sm:mb-[80px]">
              For DEVs
            </div>
            <ForDevs />
          </div>
          <div className="absolute radial-gradient-4 w-[200px] h-[500px] top-[200px] right-[20vw] sm:w-[200px] sm:h-[800px] sm:top-[100px] sm:right-[20vw] md:w-[300px] md:h-[1200px] md:top-[200px] md:right-[30vw] lg:w-[500px] lg:h-[1500px] lg:top-[-200px] lg:right-[20vw] xl:w-[700px] xl:h-[1700px] xl:top-[-300px] xl:right-[20vw] z-[-1]"></div>

          <div className="flex flex-col my-[30px] sm:my-[60px] md:my-[100px] w-full items-center">
            <div className="text-[20px] sm:text-[30px] md:text-[35px] mb-[30px] sm:mb-[80px]">
              Contacts
            </div>
            <div className="flex flex-col items-center text-[15px] sm:text-[20px] md:text-[25px] gap-[10px] sm:gap-[20px] md:gap-[50px]">
              <a
                href={"http://#"}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="easing-in-out"
              >
                example@gmail.components
              </a>
              <a
                href={"http://#"}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="easing-in-out"
              >
                <div className="flex flex-row gap-2 justify-center items-center">
                  <img
                    src={telegram}
                    className="w-[30px] md:w-[50px]"
                  />
                  <div>Partnership</div>
                </div>
              </a>
              <a
                href={"http://#"}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="easing-in-out"
              >
                <div className="flex flex-row gap-2 justify-center items-center">
                  <img
                    src={telegram}
                    className="w-[30px] md:w-[50px]"
                  />
                  <div>Support</div>
                </div>
              </a>
            </div>
            <div
              className="flex flex-row gap-5 mt-[100px] z-1"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="easing-in-out"
            >
              <a href={"http://#"}>
                <img
                  src={twitter}
                  className="w-[30px] md:w-[50px]"
                />
              </a>
              <a href={"http://#"}>
                <img
                  src={telegram}
                  className="w-[30px] md:w-[50px]"
                />
              </a>
              <a href={"http://#"}>
                <img src={email} className="w-[30px] md:w-[50px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
