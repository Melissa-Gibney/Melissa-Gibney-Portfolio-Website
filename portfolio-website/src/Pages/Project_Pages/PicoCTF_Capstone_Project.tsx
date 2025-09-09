import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
import { Link } from 'react-router-dom';

function PicoCTFCapstoneProject() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>picoCTF Capstone Project</h1>
                <List>
                    <InfoCard title="Role">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Technical Lead
                            Researcher
                            Designer
                        </h2>
                    </InfoCard>
                    <InfoCard title="Timeline">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            January 2025 - July 2025
                        </h2>
                    </InfoCard>
                    <InfoCard title="Skills">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UX Research
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Figma
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Typescript
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            React
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Storybook
                        </h2>
                    </InfoCard>
                    <InfoCard title="External Links">
                        <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://github.com/picoCTF/MHCI_2025"><b>Github</b></Link>
                        <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to=""><b>Website</b></Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            Researched ways to improve user engagement and retention on the picoCTF cybersecurity platform as a part of a five-person team.
                            This project is ongoing and will move into the design and prototyping phases during the summer of 2025.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Design Decisions</h3>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Technical Implementation</h3>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Future Plans</h3>
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='BubbleContainer'>
            <div style={{"--i":21} as React.CSSProperties}/>
            <div style={{"--i":10} as React.CSSProperties}/>
            <div style={{"--i":49} as React.CSSProperties}/>
            <div style={{"--i":35} as React.CSSProperties}/>
            <div style={{"--i":80} as React.CSSProperties}/>
            <div style={{"--i":63} as React.CSSProperties}/>
            <div style={{"--i":28} as React.CSSProperties}/>
            <div style={{"--i":55} as React.CSSProperties}/>
            <div style={{"--i":41} as React.CSSProperties}/>
            <div style={{"--i":35} as React.CSSProperties}/>
            <div style={{"--i":25} as React.CSSProperties}/>
        </div>
        <Footer pageName={'Project'}/>
    </div>
  );
}

export default PicoCTFCapstoneProject;