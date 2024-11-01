import "./App.css";
import logo from "./assets/logo.png";
import OnChainData from "./components/OnchainData";
import PlayMethod from "./components/PlayMethod";
import Demo from "./section/Demo";
import Roadmap from "./section/Roadmap";
import Partners from "./section/Partners";
import Ticket from "./components/Ticket";

const onChainData = [{
  value: "210.298",
  name: "Onchain Txs"
}, {
  value: "39.021",
  name: "Onchain Users"
}, {
  value: "90.305",
  name: "Total Users"
}, {
  value: "15.395",
  name: "Daily Users"
}, {
  value: "286.873",
  name: "Open Tickets"
}];

const playMethodData = [{
  title: "Registration",
  content: "Open Ton Tickets Bot and connect your TON wallet"
},{
  title: "Your first ticket",
  content: "After you connect ton wallet you will get your first FREE ticket"
},{
  title: "Deposit",
  content: "To buy more tickets you need to tap on button “Get Tickets” and deposit ton or another coins, and after you can buy more tickets"
},{
  title: "Play!",
  content: "Great, now you've got tickets, hurry up open them and enjoy <3 "
},]

function App() {
  return (
    <>
      <div className="w-full">
        <div className="radial-gradient-1 ">
          <div className="w-full flex justify-center my-[50px]">
            <img src={logo} alt="logo" />
          </div>
          <hr />
          <div className="w-full flex justify-center">
            <div
              className="max-w-[1468px] rounded-[20px] my-[50px] mx-[50px] text-center bg-[#D9D9D920] p-[8px]"
            >
              <div className="w-full border-2 border-solid border-gray-500 rounded-[20px] uppercase font-['Graduate'] leading-normal tracking-widest text-[30px] px-[10px]">
                TonTickets is a telegram mini-app in where people can win many
                different prizes ranging from popular memecoins to the rarest and
                most expensive NFT on TON chain
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-[420px] h-[90px] text-center flex flex-col items-center">
            <div className="absolute z-10 right-0 top-[-20px]" ><Ticket rotate={0} width={40}/></div>
            <div className="absolute z-10 left-0 bottom-0" ><Ticket rotate={45} width={40}/></div>
            <button className="absolute z-20 gradient-button rounded-lg px-[50px] py-3 ring-2 ring-offset-4 ring-offset-black ring-[#720000] font-['Graduate'] text-[30px]">Get Tickets Win Prizes</button>
          </div>
          <div className="flex flex-row justify-center items-center gap-5">
            {
              onChainData.map(item => {
                return (
                  <OnChainData name={item.name} value={item.value}/>
                )
              })
            }
          </div>
        </div>

        <div>
          <p>How to start play?</p>
          <div className="flex flex-row items-center justify-center">
            {
              playMethodData.map((item, index) => {
                return (
                  <PlayMethod order={index + 1} title={item.title} content={item.content}/>
                )
              })
            }
          </div>
        </div>

        <div className="flex flex-row">
          <div>
            <p>DEMO</p>
            <Demo />
          </div>
          <div>
            <p>ROADMAP</p>
            <Roadmap />
          </div>
        </div>
        <Partners />
      </div>
    </>
  );
}

export default App;
