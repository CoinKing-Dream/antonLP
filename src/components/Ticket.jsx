import ticket from "../assets/ticket.gif";

const Ticket = ({rotate, isSmall, isTiny=false}) => {
    return (
        <div style={{transform: `rotate(${rotate}deg)`}}>
            <img src={ticket} alt="ticket" width={isTiny?30:isSmall ? 40 : 50}/>
        </div>
    )
}

export default Ticket;