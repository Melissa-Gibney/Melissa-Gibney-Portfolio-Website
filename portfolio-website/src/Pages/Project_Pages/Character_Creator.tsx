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
                            React
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Javascript
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UI/UX Design
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Pixel Art
                        </h2>
                    </InfoCard>
                    <InfoCard title="External Link">
                        <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to=""><b>Website</b></Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            The idea for this project was to recreate some aspects of Picrew, a popular character creator platform.
                            The platform allows artists to upload their artwork in layers, and users can choose different art for each layer and then export the composite image.


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
                            I began this project as any artist would—by creating art that could be separated into layers.
                            Beginning with art was useful for two reasons:
                            first, it gave me an idea of how the character designs would feel, and 
                            second, the layering in my art program allowed me to test the separation of SVGs without fully coding the website.
                            The character design and layering would allow me to nail down the tone and get a proof of concept of the website functionality before I touched any code.
                        </p>
                        <p>
                            Once the art was nailed down, I moved on to deciding the color scheme and layout of the website.
                            As the website is a spinoff of Picrew, I decided to use a similar color scheme to that website: yellow, pink, and white.
                            The colors make the website feel energetic and friendly, matching the feeling of the pixel art I had already created.
                            I decided to make the layout completely different from Picrew because I wanted to emphasize the image that the users were creating.
                            I also took cues from many art programs by placing the options for editing the art on the left side, with the large SVG on the right.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Prototype Implementation</h3>
                        <p>
                            The actual implementation of this project was done using React with HTML, CSS and Javascript.
                            I began by using CSS Flexbox to set up the page header and two sides of the page body.
                            The most difficult part of this implementation was the use of states to track which options the user had selected.
                            This problem was handled by passing information from the child elements to the parent, and by sending that information to the SVG canvas child.
                        </p>
                        {/* Put image/diagram here */}
                        <p>
                            The use of states and SVG layers allows me to easily update and add new elements or layers whenever I like.
                            In the future, I plan to add more elements like hair, a body, and clothes.
                            I may also experiment with other ways to display color choices to the user, as the current method may get overwhelming when including more than a few colors.
                        </p>
                    </div>
                </div>
                {/* <div className='Section'>
                    <div>
                        <h3>Takeaways???</h3>
                        <p>
                            
                        </p>
                    </div>
                </div> */}
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