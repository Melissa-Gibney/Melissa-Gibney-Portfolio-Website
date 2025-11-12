import './Page.css';
// import { Link } from 'react-router-dom';
import Header from '../Components/General/Header';
import List from '../Components/General/List';
import AICharacterChatbotCard from '../Components/Project_Cards/AICharacterChatbotCard'
import PicoCTFCapstoneProjectCard from '../Components/Project_Cards/PicoCTFCapstoneProjectCard';
import Footer from '../Components/General/Footer';
import CharacterCreatorCard from '../Components/Project_Cards/CharacterCreatorCard';
import GDMSInternshipModal from '../Components/Work_Experience/GDMS_Internship_Modal';
import CylabExternshipModal from '../Components/Work_Experience/Cylab_Externship_Modal';

const Home: React.FC<{}> = () => {

    return (
        <div className="PageContainer">
            <div className='HeroContainer'>
                <Header pageName={'Home'}/>
                <div className='Section' style={{ justifyItems: "center", marginTop: "270px", marginBottom: "300px", marginInline: "10%"}}>
                    <p style={{fontSize: "2em"}}>
                        Hello! My name is Melissa Gibney, and I am a <b>recent graduate</b> of Carnegie Mellon University.
                        I am fascinated by audio software and LLMs, and I have a passion for creating <b>elegant yet playful</b> applications.
                        I am <b>open to work</b> in frontend, full stack, and UX engineering positions, so please do not hesitate to reach out.
                    </p>
                </div>
            </div>
            <div className='PageBody'>
                <List title="Work">
                    <CylabExternshipModal/>
                    <GDMSInternshipModal/>
                </List>
                <div style={{width: "100%", height: "100px", content: ""}}/>
                <List title="Highlighted Projects">
                    <PicoCTFCapstoneProjectCard/>
                    <CharacterCreatorCard/>
                    <AICharacterChatbotCard imageRef="../../assets/project_images/ai_character_chatbot/ai_character_chatbot_thumbnail.svg"/>
                </List>
                <div style={{width: "100%", height: "100px", content: ""}}/>
                {/* <img className="ProfilePic" src={"/project_images/general/Professional_Headshot.jpg"} width="200px" height="fit-content" alt=''></img> */}
            </div>
            <Footer pageName={'Home'}/>
        </div>
    );
}

export default Home;
