import './Footer.css';

interface FooterProps {
  pageName: "Home" | "Project" | "About";
}

const Footer: React.FC<FooterProps> = ({ pageName }) => {

  var shadowColor = "rgba(92, 218, 126, 0.7)";

  if(pageName == "Project")
  {
    shadowColor = "rgba(136, 92, 218, 0.7)";
  }
  else if(pageName == "About")
  {
    shadowColor = "rgba(92, 163, 218, 0.7)";
  }

  return (
    <div className="Footer" style={{boxShadow: "0px -10px 10px " + shadowColor}}>
        <div className='FooterContent'>
            <div className="FooterColumn">
                <h2>Footer Left</h2>
            </div>
            <div className="FooterColumn">
                <h2>Footer Right</h2>
            </div>
        </div>
    </div>
  );
}

export default Footer;