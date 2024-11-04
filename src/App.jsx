import logo from "./assets/logo.png";
import email from "./assets/email.png";
import twitter from "./assets/twitter.png";
import telegram from "./assets/telegram.png";
import partnerGif from "./assets/partner.gif";

import OnChainData from "./components/OnchainData";
import PlayMethod from "./components/PlayMethod";
import Demo from "./section/Demo";
import Roadmap from "./section/Roadmap";
import ForDevs from "./section/ForDevs";
import Partners from "./section/Partners";
import Ticket from "./components/Ticket";

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
    content: (<>Open <span className='text-[#EC7480E5]'>Ton Tickets Bot</span> and connect your TON wallet</>),
  },
  {
    title: "Your first ticket",
    content: (<>After you connect ton wallet you will get your first <span className='text-[#EC7480E5]'>FREE</span> ticket</>),
  },
  {
    title: "Deposit",
    content:
    (<>To buy more tickets you need to tap on button “<span className='text-[#EC7480E5]'>Get Tickets</span>” and deposit ton or another coins, and after you can buy more tickets</>),
  },
  {
    title: "Play!",
    content: (<>Great, now you've got tickets, hurry up open them and enjoy <span className='text-[#EC7480E5]'>&lt;3</span></>),
  },
];

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="radial-gradient-1 w-full z-[-105]">
          <div className="divide-y">
            <div className="w-full flex justify-center my-[20px] sm:my-[50px]">
              <img src={logo} alt="logo" className="w-[50px] lg:w-[125px] md:w-[90px] sm:w-[80px]"/>
            </div>
            <div className="flex justify-center">
              <div className="max-w-[1500px] w-[90%] rounded-[20px] my-[10px] sm:my-[20px] md:my-[30px] lg:my-[80px] mx-[20px] text-center bg-[#D9D9D920] p-[10px]">
                <div className="w-full border-2 border-solid border-gray-500 rounded-[10px] sm:rounded-[20px] uppercase leading-normal tracking-widest text-[10px] sm:text-[15px] md:text-[15px] lg:text-[20px] xl:text-[25px] px-[30px]">
                  TonTickets is a telegram mini-app in where people can win many
                  different prizes ranging from popular memecoins to the rarest
                  and most expensive NFT on TON chain
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-[100px] my-[20px] sm:my-[50px] md:my-[80px]">
            <div className="relative w-[300px] md:w-[400px] lg:w-[520px] text-center flex flex-col items-center mb-[2px] lg:mb-[50px]">
              <div className="absolute z-10 right-[-5px] top-[-20px]">
                <Ticket rotate={0} isSmall={true} />
              </div>
              <div className="absolute z-10 left-[-5px] top-[20px] sm:top-[50px] md:top-[55px] lg:top-[85px]">
                <Ticket rotate={45} isSmall={true} />
              </div>
              <button href="#" className="absolute z-20 gradient-button rounded-[5px] sm:rounded-[15px] px-[40px] sm:px-[45px] md:px-[65px] lg:px-[85px] xl:px-[60px] py-[10px] sm:py-[25px] md:py-[20px] lg:py-[30px] ring-2 ring-offset-4 ring-offset-black ring-[#720000] text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
                Get Tickets Win Prizes
              </button>
            </div>
            <div className="max-w-[1850px] w-[200px] sm:w-[70%] lg:w-[90%] my-[20px] sm:my-[60px] md:my-[100px] rounded-[20px] bg-gradient-to-r from-[#5B595980] to-[#2B2B2B80] p-[10px]">
              <div className="w-full border-2 border-solid border-gray-500 rounded-[20px] uppercase leading-normal tracking-widest text-[10px] sm:text-[15px] md:text-[20px] lg:text-[25px] px-[10px] pt-[50px] pb-[10px] relative">
                <div className="absolute z-[-100] left-[20px] top-0">
                  <Ticket rotate={327} isSmall={false} />
                </div>
                <div className="absolute z-[-100] left-[20%] top-0">
                  <Ticket rotate={193} isSmall={true} />
                </div>
                <div className="absolute z-[-100] left-[40%] top-0">
                  <Ticket rotate={20.92} isSmall={true} />
                </div>
                <div className="absolute z-[-100] left-[60%] top-0">
                  <Ticket rotate={347} isSmall={true} />
                </div>
                <div className="absolute z-[-100] left-[80%] top-0">
                  <Ticket rotate={354} isSmall={false} />
                </div>
                <div className="absolute z-[-100] right-[10px] top-0">
                  <Ticket rotate={170.18} isSmall={true} />
                </div>

                <div className="absolute z-[-100] left-[35%] top-[45%]">
                  <Ticket rotate={343} isSmall={false} />
                </div>
                <div className="absolute z-[-100] left-[70%] top-[45%]">
                  <Ticket rotate={26.97} isSmall={true} />
                </div>

                <div className="absolute z-[-100] left-[16%] bottom-0">
                  <Ticket rotate={20.55} isSmall={false} />
                </div>
                <div className="absolute z-[-1] left-[35%] bottom-0">
                  <Ticket rotate={216} isSmall={true} />
                </div>
                <div className="absolute z-[-100] left-[55%] bottom-0">
                  <Ticket rotate={250.62} isSmall={false} />
                </div>
                <div className="absolute z-[-100] left-[80%] bottom-0">
                  <Ticket rotate={8.22} isSmall={false} />
                </div>
                <div className="flex flex-row flex-wrap justify-around items-center gap-[20px] lg:gap-[40px] lx:gap-[60px]">
                  {onChainData.map((item) => {
                    return <OnChainData name={item.name} value={item.value} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[50px] md:gap-[100px] z-[100] w-full">
            <div className="z-[100] text-[20px] sm:text-[30px] md:text-[35px] mt-[30px] sm:mt-[50px] md:mt-[60px] lg:mt-[100px]">How to start play?</div>
            <div className="flex sm:flex-row flex-col items-center justify-center sm:items-start sm:justify-around  gap-5 sm:gap-[50px] relative w-[90%]">
              <div className="sm:h-[1px] sm:w-[80%] h-[400px] left-[40px] w-[1px] sm:left-[50px] md:left-[100px] lg:left-[150px] bg-[#404040] z-[-1000] absolute sm:top-[40px] md:top-[50px] lg:top-[49px] xl:top-[80px]"></div>
              {playMethodData.map((item, index) => {
                return (
                  <PlayMethod
                    order={index + 1}
                    title={item.title}
                    content={item.content}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="radial-gradient-2 my-[50px] sm:my-[60px] md:my-[100px] flex lg:flex-row lg:justify-around flex-col gap-5 w-full max-w-[1500px]">
          <div className="flex flex-col items-center gap-[20px] sm:gap-[50px]">
            <p className="text-[20px] sm:text-[30px] md:text-[35px]">DEMO</p>
            <Demo />
          </div>
          <div className="flex flex-col items-center gap-[20px] sm:gap-[50px] overflow-hidden">
            <p className="text-[20px] sm:text-[30px] md:text-[35px]">ROADMAP</p>
            <Roadmap />
          </div>
        </div>

        <div className="radial-gradient-3 flex flex-col my-[50px] sm:my-[80px] md:my-[100px] gap-5 w-[90%] items-center">
          <div className="flex flex-row gap-2">
            <span className="text-[20px] sm:text-[40px]">Partners</span>
            <img className="w-[25px] sm:w-[50px]" src={partnerGif} />
          </div>
          <Partners />
        </div>

        <div className="flex flex-col my-[20px] sm:my-[50px] w-[90%] items-center justify-center">
          <div className="text-[30px] sm:text-[50px] mb-[30px] sm:mb-[80px]">For DEVs</div>
          <ForDevs />  
        </div>

        <div className="radial-gradient-4 flex flex-col my-[30px] sm:my-[60px] md:my-[100px] w-full items-center">
          <div className="text-[20px] sm:text-[30px] md:text-[40px] mb-[30px] sm:mb-[80px]">Contacts</div>
          <div className="flex flex-col items-center text-[15px] sm:text-[20px] md:text-[30px] gap-[10px] sm:gap-[20px] md:gap-[50px]">
            <a href={"http://#"}>example@gmail.components</a>
            <a href={"http://#"}>
              <div className="flex flex-row gap-2">
                <img src={telegram} className="w-[20px] sm:w-[30px] md:w-[50px]"/>
                <div>Partnership</div>
              </div>
            </a>
            <a href={"http://#"}>
              <div className="flex flex-row gap-2">
                <img src={telegram} className="w-[20px] sm:w-[30px] md:w-[50px]"/>
                <div>Support</div>
              </div>
            </a>
          </div>
          <div className="flex flex-row gap-5 mt-[100px]">
            <a href={"http://#"}><img src={twitter} className="w-[20px] sm:w-[30px] md:w-[50px]"/></a>
            <a href={"http://#"}><img src={telegram} className="w-[20px] sm:w-[30px] md:w-[50px]"/></a>
            <a href={"http://#"}><img src={email} className="w-[20px] sm:w-[30px] md:w-[50px]"/></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
