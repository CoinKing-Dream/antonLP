const devs = ["01011001", "01101111", "01110101", "01110010", "00100000", "01100010", "01110101",
     "01101110", "01101110", "01111001", "00100000", "01110111", "01110010", "01101111", "01110100",
      "01100101", "00100000"];

const ForDevs = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-[20px] max-w-[1663px]">
        {
            devs.map((item, index) => {
                return(
                    <>
                        <span className="text-[15px] sm:text-[20px] md:text-[25px]">{item}</span>
                    </>
                )
            })
        }
        </div>
    )
}

export default ForDevs;