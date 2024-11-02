
const Onchaindata = ({value, name}) => {
    return (
        <div className="z-1000 flex flex-col justify-center items-center gap-3">
            <div className="text-[#EC7480]">{value}</div>
            <div>{name}</div>
        </div>
    )
}

export default Onchaindata;