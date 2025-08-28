import './Home.css';
// import { Link } from 'react-router-dom';
import Header from '../Components/General/Header';
import List from '../Components/General/List';
import AICharacterChatbotCard from '../Components/Project_Cards/AICharacterChatbotCard'
import RoboticDrumMachineCard from '../Components/Project_Cards/RoboticDrumMachineCard';
import PicoCTFCapstoneProjectCard from '../Components/Project_Cards/PicoCTFCapstoneProjectCard';
import Footer from '../Components/General/Footer';

function Home() {

    // const handleClick = () => {
    // }

    return (
        <div className="Home">
            <Header pageName={'Home'}/>
            <div className='Body'>
                {/* <img className="ProfilePic" src={"/project_images/general/Professional_Headshot.jpg"} width="200px" height="fit-content" alt=''></img> */}
                <div className='Section' style={{marginTop: "100px", marginBottom: "100px"}}>
                    <h1>Melissa Gibney is a UX engineer studying at Carnegie Mellon University. She is enthralled by audio software and AI, and she has a passion for creating <b>clean</b>, <b>playful</b> applications.</h1>
                </div>
                <List title="Highlighted Projects">
                    <PicoCTFCapstoneProjectCard/>
                    <RoboticDrumMachineCard/>
                    <AICharacterChatbotCard/>
                </List>
            </div>
            <div className="BubbleContainer">
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
            <Footer pageName={'Home'}/>
        </div>
    );
}

export default Home;