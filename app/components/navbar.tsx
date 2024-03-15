import Image from"next/image";
import Logo from "../../public/laura.png";
import "./navbar.css";
import Icon from"../../public/Mail.png";
import Icon2 from "../../public/linkedin.png";

export default function Navbar(){
    return(
        <>
        
        <nav>
            <Image src={Logo} alt="Laura Smith" className="resim" width={317} height={317}/>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <h4>laurasmith.website</h4>

            <div className="buton">
          <button className="email">
            <Image className="icon1" src={Icon} alt="logo" />
            Email
          </button>
          <button className="linkedin">
            <Image className="icon2" src={Icon2} alt="logo2" />
            LinkedIn
          </button>

        </div>

        <div className="yazilar">
            <h2 className="hakkinda">About</h2>
               <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className="ilgiler">Interests </h2>
               <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        </nav>
        
        </>
    )
}