import './Project_Page.css';
import Header from '../../Components/General/Header';
import Footer from '../../Components/General/Footer';
import List from '../../Components/General/List';
import InfoCard from '../../Components/General/InfoCard';
import { Link } from 'react-router-dom';

interface AICharacterChatbotProps {

}

const AICharacterChatbot: React.FC<AICharacterChatbotProps> = () => {
    return (
        <div className="Project">
            <Header pageName={'Project'}/>
            <div className="PageBody">
                <div className='Contents'>
                    <h1>AI Character Chatbot</h1>
                    <List>
                        <InfoCard title="Role">
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                Creator
                            </h2>
                        </InfoCard>
                        <InfoCard title="Timeline">
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                March 2025 - Present
                            </h2>
                        </InfoCard>
                        <InfoCard title="Skills">
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                Docker
                            </h2>
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                Networking
                            </h2>
                            <h2 style={{width: "100%", textAlign: "center"}}>
                                Python
                            </h2>
                        </InfoCard>
                        <InfoCard title="External Link">
                            {/* <h2 style={{width: "100%", textAlign: "center"}}>
                                Test
                            </h2> */}
                            <Link to="">Github</Link>
                        </InfoCard>
                    </List>
                    <div className='Section'>
                        <div>
                            <h3>Summary</h3>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    <div className='Section'>
                        <div>
                            <h3>Design Decisions</h3>
                            <p>
                                I have been intrigued by chatbots ever since I began learning computer science in high school, and the advent of LLMs and character-focused chatbots only heightened my interest.
                                This project was inspired by Neuro-sama in particular, as I was fascinated by the way that project's LLM is hooked up to a moveable character model.
                                The movements of the model make the character seem very lifelike, and it adds a level of charm to any mistakes that the LLM makes in its output. 
                            </p>
                            <p>
                                Despite my love for the Neuro-sama project, I wanted to ensure that my own idea was unique and novel to some extent.
                                Before I began coding, I came up with the idea for my character, and defined a few aspects that would differentiate my implementation from others.
                            </p>
                            <p>
                                The first unique aspect of this project is the character involved.
                                Many chatbots created to imitate Neuro-sama are given the characters of women or girls, but I have loved mythical creatures ever since I was a child and wanted my character to stand out, so I decided to make my chatbot into a giant silver dragon named Vervada.
                                In terms of her personality, Vervada is meant to be overprotective of those she cares about, but is generally kind to those around her.
                                In addition to her overall personality, she also has a few character quirks, such as her favorite food being venison.
                            </p>
                            <p>
                                The second unique aspect of this project is that the model connected to the LLM will be 3D rather than 2D.
                                I am familiar with 3D modeling characters, and I decided that while the 3D model may take more time to create than a 2D drawing, it would lend a unique look and feel to the character.
                                The model will be brought into Unreal Engine and controlled by playing animations based off of the output from the LLM.
                            </p>
                            <p>
                                After deciding on the character and some of the visual aspects of the project, I began to make a simple prototype using Flask, Python, ChatGPT, and Discord.
                                This first iteration of the bot was meant to be a proof of concept, as I was learning to use platforms that were entirely new to me and wanted to make sure that I understood how everything was connected.
                                The result was a ChatGPT-based system that sent and recieved responses over HTTP.
                                For this iteration of the character, I focused on fine-tuning and system prompts.
                                I ended up having greater success with system prompts as I had very little data to fine-tune the LLM.
                                I did not tackle the aspect of moving a model with this iteration of the project because I wanted to focus mostly on the character and the architecture needed to communicate between each part of the code.
                                Once I understood the basic aspects of each part of the system, I moved on to the current iteration of this system.
                            </p>
                        </div>
                    </div>
                    <div className='Section'>
                        <div>
                            <h3>Prototype Implementation</h3>
                            <p>
                                After deciding on the character and some of the visual aspects of the project, I began to make a simple prototype using Flask, Python, ChatGPT, and Discord.
                                This first iteration of the bot was meant to be a proof of concept, as I was learning to use platforms that were entirely new to me and wanted to make sure that I understood how everything was connected.
                                The result was a ChatGPT-based system that sent and recieved responses over HTTP. For this iteration of the character, I focused on fine-tuning and system prompts.
                                I ended up having greater success with system prompts as I had very little data to fine-tune the LLM.
                                I did not tackle the aspect of moving a model with this iteration of the project because I wanted to focus mostly on the character and the architecture needed to communicate between each part of the code.
                                Once I understood the basic aspects of each part of the system, I moved on to the current iteration of this system.
                            </p>
                            <p>
                                The current iteration of the chatbot has been changed in quite a few ways.
                                The first part of the project that I changed was its architecture.
                                I learned to create containers for parts of the code that could each be run separately using Docker: one for the API, one for the LLM, one for the control panel, and one for the Discord bot.
                                While this change is insignificant to the end user, containerization makes it much easier to test and add new features-essentially turning this project into a microservice.
                                In addition to containerization, I changed the communication between containers to use websockets instead of HTTP requests.
                                This change decreases the latency between the time the user sends a message and the chatbot responds, which will be incredibly helpful one I add in other systems for memory and tool calling.
                            </p>
                        </div>
                    </div>
                    <div className='Section'>
                        <div>
                            <h3>Future Plans</h3>
                            <p>
                                In the future, I plan to add many other features to this bot, including the model control, memory, and tool calling mentioned earlier.
                                I will also add speech to text and text to speech models in order to communicate with the chatbot via voice.
                                Before I implement those new features, I am going to fully nail down the character of the LLM, including its values, personality, and manner of speaking.
                                This change will require me to use an open source solution such as Mistral and then add my own prompts, fine-tuning, and filters to ensure the model does not deviate from what I expect it to output.
                                I am very excited to continue learning and working on this project!
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

export default AICharacterChatbot;