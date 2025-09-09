import './Header.css';
import ExternalLinkButton from './ExternalLinkButton.tsx';
import MenuLink from './MenuLink.tsx';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface HeaderProps {
  	pageName: "Home" | "Project" | "About";
}

const Header: React.FC<HeaderProps> = ({ /*pageName*/ }) =>  {

  	return (
    	<div className="Header">
     		<div className="HeaderLeft">
        		{/* <h3 style={{margin:"8px", color:"white"}}>Melissa Gibney</h3> */}
        		<div className="LinksDiv">
          			<ExternalLinkButton link={"https://www.linkedin.com/in/melissa-gibney/"} icon={faLinkedinIn} size={"2x"} inverse={true}/>
					<ExternalLinkButton link={"https://github.com/Melissa-Gibney"} icon={faGithub} size={"2x"} inverse={true}/>
          			<ExternalLinkButton link={"mailto:magibney15@gmail.com"} icon={faEnvelope} size={"2x"} inverse={true}/>
        		</div>
      		</div>
      		<div className="HeaderRight">
        		<MenuLink title="Home" link="/" shadowColor={"rgba(136, 92, 218, 0.7)"}/>
        		<MenuLink title="Projects" link="/projects" shadowColor={"rgba(136, 92, 218, 0.7)"}/>
        		<MenuLink title="About" link="/about" shadowColor={"rgba(136, 92, 218, 0.7)"}/>
      		</div>
    	</div>
  	);
}

export default Header;