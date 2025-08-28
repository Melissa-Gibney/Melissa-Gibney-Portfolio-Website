import './Header.css';
import ExternalLinkButton from './ExternalLinkButton.tsx';
import MenuLink from './MenuLink.tsx';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface HeaderProps {
  pageName: "Home" | "Project" | "About";
}

const Header: React.FC<HeaderProps> = ({ /*pageName*/ }) =>  {

  // var shadowColor = "rgba(92, 218, 126, 0.7)";
  // if(pageName == "Project")
  // {
  //   shadowColor = "rgba(136, 92, 218, 0.7)";
  // }
  // else if(pageName == "About")
  // {
  //   shadowColor = '#003b5c';
  // }

  return (
    <div className="Header">
      <div className="HeaderLeft">
        {/* <h3 style={{margin:"8px", color:"white"}}>Melissa Gibney</h3> */}
        <div className="LinksDiv">
          <ExternalLinkButton link={"https://www.linkedin.com/in/melissa-gibney/"} icon={faLinkedinIn} size={"2x"} inverse={true} /*backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}*//>
          <ExternalLinkButton link={"mailto:magibney15@gmail.com"} icon={faEnvelope} size={"2x"} inverse={true} /*backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}*//>
          {/*<LinkButton link={"Melissa_Gibney_Resume_UX_Engineer.pdf"} icon={faFilePdf} size={"2x"} isWhite={true} backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}/>*/}
        </div>
      </div>
      <div className="HeaderRight">
        <MenuLink title="Home" link="/" shadowColor={"rgba(136, 92, 218, 0.7)"}/>
        <MenuLink title="Projects" link="/projects" shadowColor={"rgba(136, 92, 218, 0.7)"}/>
        <MenuLink title="About" link="/about" shadowColor={"rgba(136, 92, 218, 0.7)"}/>
        {/*<h4 style={{margin:"8px"}}>Menu</h4>*/}
        {/*<NavMenu icon={faBars} size={"2x"} isWhite={true} backgroundColor={"#0072b1"} hoverColor={"#1b9ce3"} activeColor={"#005c8f"} shadowColor={"#003b5c"}/>*/}
      </div>
    </div>
  );
}

export default Header;