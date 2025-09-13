import './Page.css';
// import { Link } from 'react-router-dom';
import Header from '../Components/General/Header';
import List from '../Components/General/List';
import AICharacterChatbotCard from '../Components/Project_Cards/AICharacterChatbotCard'
import PicoCTFCapstoneProjectCard from '../Components/Project_Cards/PicoCTFCapstoneProjectCard';
import Footer from '../Components/General/Footer';
import CharacterCreatorCard from '../Components/Project_Cards/CharacterCreatorCard';

function Home() {

    // const handleClick = () => {
    // }

    return (
        <div className="PageContainer">
            <Header pageName={'Home'}/>
            <div className='PageBody'>
                <div className='Contents'>
                    <div className='Section' style={{marginTop: "100px", marginBottom: "100px"}}>
                        <p style={{fontSize: "2em"}}>
                            Hello! My name is Melissa Gibney, and I am a <b>recent graduate</b> of Carnegie Mellon University.
                            I am enthralled by audio software and LLMs, and I have a passion for creating <b>clean</b>, <b>playful</b> applications.
                            I am <b>open to work</b> in frontend, full stack, and UX engineering positions, so please do not hesitate to reach out.
                        </p>
                    </div>
                    <List title="Highlighted Projects">
                        <PicoCTFCapstoneProjectCard/>
                        <CharacterCreatorCard/>
                        <AICharacterChatbotCard/>
                    </List>
                </div>
                {/* <img className="ProfilePic" src={"/project_images/general/Professional_Headshot.jpg"} width="200px" height="fit-content" alt=''></img> */}
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