import './Page.css';
import Header from '../Components/General/Header';
import Footer from '../Components/General/Footer';
// import Background from '../Components/General/Background.js';
import List from '../Components/General/List';
import RoboticDrumMachineCard from '../Components/Project_Cards/RoboticDrumMachineCard';
import PicoCTFCapstoneProjectCard from '../Components/Project_Cards/PicoCTFCapstoneProjectCard';
import AICharacterChatbotCard from '../Components/Project_Cards/AICharacterChatbotCard';
import FluteSynthesizerCard from '../Components/Project_Cards/FluteSynthesizerCard';
import CharacterCreatorCard from '../Components/Project_Cards/CharacterCreatorCard';
import GiantEagleAccessibilityDesignCard from '../Components/Project_Cards/GiantEagleAccessibilityDesignCard';
import BumbleMeetCard from '../Components/Project_Cards/BumbleMeetCard';
// import { Canvas } from '@react-three/fiber';

import '../Scripts/MouseTracking.ts'

function Projects() {
    return (
        <div className='PageContainer'>
            <div className='HeroContainer'>
                <Header pageName={'Project'}/>
                <div className='Section' style={{ width: "fit-content", justifyItems: "center", marginTop: "150px", marginBottom: "50px", marginInline: "10%"}}>
                    <p style={{fontSize: "2em", textAlign: "center"}}>
                        <b>Projects</b>
                    </p>
                </div>
                <div className='Section' style={{ justifyItems: "center", marginTop: "50px", marginBottom: "250px", marginInline: "10%"}}>
                    <p style={{fontSize: "2em"}}>
                        These projects demonstrate my <b>techical</b> and <b>creative</b> capabilities.
                        I have worked in many different industries, from audio engineering to cybersecurity, and throughout my education and career, I have maintained my passion for technology and creativity.
                        I am continuing work on some of these projects, and I am excited to share more about them in the future!
                    </p>
                </div>
            </div>
            <div className="PageBody">
                <div className='Contents'>
                    {/* <div style={{width: "100%", height: "50px", content: ""}}/>
                    <div className='Section' style={{marginTop: "100px", marginBottom: "100px"}}>
                        <p style = {{fontSize: "2em"}}>
                            These projects demonstrate my <b>techical</b> and <b>creative</b> capabilities.
                            I have worked in many different industries, from audio engineering to cybersecurity, and throughout my education and career, I have maintained my passion for technology and creativity.
                            I am continuing work on some of these projects, and I am excited to share more about them in the future!
                        </p>
                    </div> */}
                    <List title = "">
                        <PicoCTFCapstoneProjectCard/>
                        <CharacterCreatorCard/>
                        <AICharacterChatbotCard/>
                        <FluteSynthesizerCard/>
                        <RoboticDrumMachineCard/>
                        <GiantEagleAccessibilityDesignCard/>
                        <BumbleMeetCard/>
                        {/*<Card image={null} title="Metronome App" description="Prototyped a metronome app in Swift and allowed the user to set tempo and subdivision. The user is able to browse common sheet music sites from within the app."/>*/}
                    </List>
                    <div style={{width: "100%", height: "100px", content: ""}}/>
                </div>
            </div>
            {/* <div className="BubbleContainer">
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
            </div> */}
            <Footer pageName={'Project'}/>
        </div>
    );
}

export default Projects;