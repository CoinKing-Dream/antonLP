import ticket from "../assets/ticket.gif";

const Ticket = ({rotate, size}) => {
    return (
        <div style={{transform: `rotate(${rotate}deg)`}}>
            <img src={ticket} alt="ticket" width={size.width} height={size.height}/>
        </div>
    )
}

export default Ticket;