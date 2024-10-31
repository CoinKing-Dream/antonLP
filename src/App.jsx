import "./App.css";
import logo from "./assets/logo.png";
import OnChainData from "./components/OnchainData";
import PlayMethod from "./components/PlayMethod";
import Demo from "./section/Demo";
import Roadmap from "./section/Roadmap";
import Partners from "./section/Partners";

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
        <div className="w-full flex justify-center my-[50px]">
          <img src={logo} alt="logo" />
        </div>
        <hr />
        <div className="w-full flex justify-center">
          <div
            className="max-w-[1468px] my-[50px] px-[50px] text-center bg-[white] p-[5px]"
          >
            <div className="w-[100%] bg-[red]">

            <p className="uppercase font-['Graduate'] leading-normal tracking-widest text-[30px]">
              TonTickets is a telegram mini-app in where people can win many
              different prizes ranging from popular memecoins to the rarest and
              most expensive NFT on TON chain
            </p>
            </div>
          </div>
        </div>
        <div>
          <button>Get Tickets Win Prizes</button>
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
