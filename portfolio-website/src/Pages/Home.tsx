import './Home.css';
// import { Link } from 'react-router-dom';
import Header from '../Components/General/Header';
import List from '../Components/General/List';
import AICharacterChatbotCard from '../Components/Project_Cards/AICharacterChatbotCard'
import RoboticDrumMachineCard from '../Components/Project_Cards/RoboticDrumMachineCard';
import PicoCTFCapstoneProjectCard from '../Components/Project_Cards/PicoCTFCapstoneProjectCard';

function Home() {

    // const handleClick = () => {
    // }

    return (
        <div className="Home">
            <Header pageName={'Home'}/>
            <div className='Body'>
                {/* <img className="ProfilePic" src={"/project_images/general/Professional_Headshot.jpg"} width="200px" height="fit-content" alt=''></img> */}
                <div className='Section' style={{marginTop: "100px", marginBottom: "100px"}}>
                    <h1>Melissa Gibney is a UX engineer studying at Carnegie Mellon University. She is enthralled by audio software and AI and has a passion for creating <b>clean</b>, <b>playful</b> applications.</h1>
                </div>
                <List title="Highlighted Projects">
                    <PicoCTFCapstoneProjectCard/>
                    <RoboticDrumMachineCard/>
                    <AICharacterChatbotCard/>
                </List>
            </div>
        </div>
    );
}

export default Home;