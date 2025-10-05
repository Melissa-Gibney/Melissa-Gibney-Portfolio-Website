import './Header.css';
import ExternalLinkButton from './ExternalLinkButton.tsx';
import MenuLink from './MenuLink.tsx';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  	pageName: "Home" | "Project" | "About";
}

const Header: React.FC<HeaderProps> = ({ /*pageName*/ }) =>  {
	const navigate = useNavigate();

  	return (
    	<div className="Header">
     		<div className="HeaderLeft">
				<button style={{background: "transparent", border: "0px"}} onClick={()=>(navigate("/"))}>
					<h1 style={{margin:"8px", color:"white", fontSize: "3em"}}>Melissa Gibney</h1>
				</button>
        		<div className="LinksDiv">
          			<ExternalLinkButton link={"https://www.linkedin.com/in/melissa-gibney/"} icon={faLinkedinIn} size={"2x"} inverse={true}/>
					<ExternalLinkButton link={"https://github.com/Melissa-Gibney"} icon={faGithub} size={"2x"} inverse={true}/>
          			<ExternalLinkButton link={"mailto:magibney15@gmail.com"} icon={faEnvelope} size={"2x"} inverse={true}/>
        		</div>
      		</div>
      		<div className="HeaderRight">
        		<MenuLink title="Home" link="/" isInternal={true} shadowColor={"rgba(136, 92, 218, 0.7)"}/>
        		<MenuLink title="Projects" link="/projects" isInternal={true} shadowColor={"rgba(136, 92, 218, 0.7)"}/>
				<MenuLink title="Resume" link="Melissa_Gibney_Resume.pdf" isInternal={false} shadowColor={"rgba(136, 92, 218, 0.7)"}/>
        		<MenuLink title="About" link="/about" isInternal={true} shadowColor={"rgba(136, 92, 218, 0.7)"}/>
      		</div>
    	</div>
  	);
}

export default Header;
