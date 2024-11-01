import ticket from "../assets/ticket.gif";

const Ticket = ({rotate, width}) => {
    return (
        <>
            <img src={ticket} alt="ticket" className={"rotate-["+rotate+"deg]"} width={width}/>
        </>
    )
}

export default Ticket;