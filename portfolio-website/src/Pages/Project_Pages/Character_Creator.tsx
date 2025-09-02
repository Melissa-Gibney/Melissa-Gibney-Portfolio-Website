import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
import { Link } from 'react-router-dom';

function CharacterCreator() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Character Creator</h1>
                <List>
                    <InfoCard title="Role">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Artist
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Designer
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Developer
                        </h2>
                    </InfoCard>
                    <InfoCard title="Timeline">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            November 2024 - December 2024
                        </h2>
                    </InfoCard>
                    <InfoCard title="Skills">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Pixel Art
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UX Design
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            React
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Javascript
                        </h2>
                    </InfoCard>
                    <InfoCard title="External Link">
                        <Link to="">Website</Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            The idea for this project was to recreate some aspects of Pixiv, a popular character creator platform.
                            The platform allows artists to upload their artwork in layers, and users can choose different art for each layer and then export the composite image.
                            I began this project as any artist would-by creating art that could be separated into layers.

                            During my undergraduate degree, I dabbled in video game development, so I chose to create pixel art as I was very familiar with that style.
                    
                            Designed a web application that allows users to customize their own character using premade pixel art assets.
                            Each design can then be exported as an SVG or PNG.
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
                        <h3>Prototype Implementation</h3>
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

export default CharacterCreator;