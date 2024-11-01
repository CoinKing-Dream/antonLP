import ticket from "../assets/ticket.gif";

const Ticket = ({rotate, isSmall}) => {
    return (
        <div style={{transform: `rotate(${rotate}deg)`}}>
            <img src={ticket} alt="ticket" width={isSmall ? 40 : 50}/>
        </div>
    )
}

export default Ticket;