const partners = ["partner-1.png"];
const imgPath = "../assets/";
import partnerGif from "../assets/partner.gif";

const Partners = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <span>Partners</span>
                <img width={30} src={partnerGif}/>
            </div>
            <div className="flex flex-row">
            {
                partners.map(item => {
                    return (
                        <>
                            <img src={imgPath+item} />
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}


export default Partners;