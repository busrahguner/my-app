import "./footer.css";
import Image from "next/image";
import Facebook from "../../public/Facebook Icon.png";
import Github from "../../public/GitHub Icon.png";
import Instagram from "../../public/Instagram Icon.png";
import Twitter from "../../public/Twitter Icon.png";

export default function Main() {
    return (
        <>
        
        <footer>
        <Image src={Twitter} alt="twitter"></Image>
        <Image src={Facebook} alt="facebook"></Image>
        <Image src={Instagram} alt="instagram"></Image>
        <Image src={Github} alt="github"></Image>
        </footer>
    
        </>
    )

    }