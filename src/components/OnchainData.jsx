
const Onchaindata = ({value, name}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="text-[#EC7480]">{value}</div>
            <div>{name}</div>
        </div>
    )
}

export default Onchaindata;