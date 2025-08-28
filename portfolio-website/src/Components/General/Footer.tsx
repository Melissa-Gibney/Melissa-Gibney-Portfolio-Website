import './Footer.css';

interface FooterProps {
  pageName: "Home" | "Project" | "About";
}

const Footer: React.FC<FooterProps> = ({ }) => {

  return (
    <div className="Footer">
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