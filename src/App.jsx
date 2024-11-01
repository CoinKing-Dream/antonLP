import "./App.css";
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
    content: "Open Ton Tickets Bot and connect your TON wallet",
  },
  {
    title: "Your first ticket",
    content: "After you connect ton wallet you will get your first FREE ticket",
  },
  {
    title: "Deposit",
    content:
      "To buy more tickets you need to tap on button “Get Tickets” and deposit ton or another coins, and after you can buy more tickets",
  },
  {
    title: "Play!",
    content: "Great, now you've got tickets, hurry up open them and enjoy <3 ",
  },
];

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="radial-gradient-1 divide-y">
          <div className="w-full flex justify-center my-[50px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-[1700px] rounded-[20px] my-[80px] mx-[50px] text-center bg-[#D9D9D920] p-[10px]">
              <div className="w-full border-2 border-solid border-gray-500 rounded-[20px] uppercase leading-normal tracking-widest text-[30px] px-[30px]">
                TonTickets is a telegram mini-app in where people can win many
                different prizes ranging from popular memecoins to the rarest
                and most expensive NFT on TON chain
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-[90%] gap-[100px] my-[100px]">
          <div className="relative w-[520px] text-center flex flex-col items-center my-[50px]">
            <div className="absolute z-10 right-0 top-[-20px]">
              <Ticket rotate={0} isSmall={true} />
            </div>
            <div className="absolute z-10 left-[-5px] top-[85px]">
              <Ticket rotate={45} isSmall={true} />
            </div>
            <button className="absolute z-20 gradient-button rounded-[15px] px-[60px] py-[30px] ring-2 ring-offset-4 ring-offset-black ring-[#720000] font-['Graduate'] text-[30px]">
              Get Tickets Win Prizes
            </button>
          </div>
          <div className="max-w-[1850px] my-[100px] w-[100%] rounded-[20px] bg-gradient-to-r from-[#5B595980] to-[#2B2B2B80] p-[10px]">
            <div className="w-full border-2 border-solid border-gray-500 rounded-[20px] uppercase leading-normal tracking-widest text-[30px] px-[10px] pt-[50px] pb-[10px] relative">
              <div className="flex flex-row justify-around items-center gap-5">
                {onChainData.map((item) => {
                  return <OnChainData name={item.name} value={item.value} />;
                })}
              </div>
              <div className="absolute z-10 left-[20px] top-0">
                <Ticket rotate={327} isSmall={false} />
              </div>
              <div className="absolute z-10 left-[20%] top-0">
                <Ticket rotate={193} isSmall={true} />
              </div>
              <div className="absolute z-10 left-[40%] top-0">
                <Ticket rotate={20.92} isSmall={true} />
              </div>
              <div className="absolute z-10 left-[60%] top-0">
                <Ticket rotate={347} isSmall={true} />
              </div>
              <div className="absolute z-10 left-[80%] top-0">
                <Ticket rotate={354} isSmall={false} />
              </div>
              <div className="absolute z-10 right-[10px] top-0">
                <Ticket rotate={170.18} isSmall={true} />
              </div>

              <div className="absolute z-10 left-[35%] top-[45%]">
                <Ticket rotate={343} isSmall={false} />
              </div>
              <div className="absolute z-10 left-[70%] top-[45%]">
                <Ticket rotate={26.97} isSmall={true} />
              </div>

              <div className="absolute z-10 left-[20%] bottom-0">
                <Ticket rotate={20.55} isSmall={false} />
              </div>
              <div className="absolute z-10 left-[40%] bottom-0">
                <Ticket rotate={216} isSmall={true} />
              </div>
              <div className="absolute z-10 left-[60%] bottom-0">
                <Ticket rotate={250.62} isSmall={false} />
              </div>
              <div className="absolute z-10 left-[80%] bottom-0">
                <Ticket rotate={8.22} isSmall={false} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 my-[100px]">
          <div className="text-[40px]">How to start play?</div>
          <div className="flex flex-row items-start justify-around">
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

        <div className="my-[100px] flex flex-row justify-around text-[50px] w-[90%]">
          <div className="flex flex-col items-center gap-[50px]">
            <p>DEMO</p>
            <Demo />
          </div>
          <div className="flex flex-col items-center gap-[50px]">
            <p>ROADMAP</p>
            <Roadmap />
          </div>
        </div>

        <div className="flex flex-col my-[100px] w-[90%] items-center">
          <div className="flex flex-row gap-2 mb-[80px]">
            <span className="text-[40px]">Partners</span>
            <img width={50} height={48.44} src={partnerGif} />
          </div>
          <Partners />
        </div>

        <div className="flex flex-col my-[50px] w-full items-center justify-center">
          <div className="text-[50px] mb-[80px]">For DEVs</div>
          <ForDevs />  
        </div>

        <div className="flex flex-col my-[100px] w-full items-center">
          <div className="text-[40px] mb-[80px]">Contacts</div>
          <div className="flex flex-col items-center text-[30px] gap-[50px]">
            <a href={"http://#"}>example@gmail.components</a>
            <a href={"http://#"}>
              <div className="flex flex-row gap-2">
                <img src={telegram}/>
                <div>Partnership</div>
              </div>
            </a>
            <a href={"http://#"}>
              <div className="flex flex-row gap-2">
                <img src={telegram}/>
                <div>Support</div>
              </div>
            </a>
          </div>
          <div className="flex flex-row gap-5 mt-[100px]">
            <a href={"http://#"}><img src={twitter}/></a>
            <a href={"http://#"}><img src={telegram}/></a>
            <a href={"http://#"}><img src={email}/></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
