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
                        <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://github.com/picoCTF/MHCI_2025" target='_blank'><b>Github</b></Link>
                        <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://picoctf-x-mhci-capstone.webflow.io/" target='_blank'><b>Website</b></Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            Developers of the picoCTF platform asked my five-person team to devise new features to improve user retention on the platform and deliver React components to allow for easy implementation of these new features.
                            We began with research and determined that the platform's users needed guidance to determine what to do and where to go next.
                            From there, we moved into the design phase and created a new homepage, profile page, and learning paths to guide users through their cybersecurity journey.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Research</h3>
                        <p>
                            Roughly two thirds of our time working on this project was spend doing research and testing.
                            During this phase of the project, we all split up tasks amongst the team and conducted surveys, user interviews, subject matter expert interviews, and a focus group.
                            We all took part in each of these tasks, and after each step in our research, we combined our insights and used them to determine our next steps.
                        </p>
                        <p>
                            My main roles in this process were to handle _____
                        </p>
                        <p>
                            By the end of this research phase, we had settled on three main directions to explore with our designs: making users confident, determined, and social.
                            We then moved on to testing and iterating upon a wide variety of designs.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Design Decisions</h3>
                        <p>
                            Our parallel prototyping design phase began with each of us coming up with 5 to 8 ideas per design direction, leading to over 150 sketches of our ideas.
                            The next step was to _____
                        </p>
                        <p>
                            While the main designs for each page fell to other members of my team as I was working on technical implementation, I gave feedback on designs with respect to their technical feasibility and UX design.
                            We agreed to use the <a href='https://www.heroui.com/'>HeroUI library</a> before starting the design and implementation process, so we were all aligned on the UI style and functionality of built-in components.
                            We chose this library in particular because it is free, has both React and Figma libraries that are actively being maintained, and has a wide range of appealing components.
                            After this point, our workflow settled into a new rhythm where we would each work on our section of the project and then provide feedback to each other as we went along.
                            I let the designers know the limitations of the HeroUI library and we worked around those as-needed.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Technical Implementation</h3>
                        <p>
                            As the technical lead and sole programmer on my team, it was my responsibility to create all of the React components, link them to Storybook for documentation, and ensure they work properly with one another.
                            I began by setting up the Vite, React, and Typescript project, followed by adding Storybook and React Router for documentation and navigation, respectively.
                            I then added in a Dockerfile and Docker compose file so that the code could easily be run by developers on the picoCTF team once my team was out of the picture.
                            The Docker compose file was later updated by <a href='https://engineering.cmu.edu/directory/bios/liang-ivan.html'>Ivan Liang</a> to include access for the code to be run on a Kepler server.
                            After recommending the <a href='https://www.heroui.com/'>HeroUI library</a> to my team and all agreeing to its use, I installed the HeroUI library and began implementing the React components as designs were created and finalized.
                        </p>
                        <p>
                            These React components were all implemented over the course of a roughly 3 week sprint.
                            Designs for the components were not finalized until the end of week two of that sprint period, so I revised designs as they were updated.
                            As there were about 50 React components to implement in a relatively short time period, and I knew that the revising of designs would lead to a time crunch, I broke the implementation process into roughly three "passes".
                            The first pass was purely for functionality purposes—understanding how these components fit together, their layout on each page, and their internal functionality.
                            The second pass was done to ensure colors and sizes of components were consistent with their designs, and the third pass was to transfer any changes that the rest of my team had made to the designs into the code, as well as set the fonts consistently across components.
                            These passes ended up blending together as the weeks progressed and the designers created more components, but the idea of covering everything in stages helped with time management and communicating progress with the rest of the team.
                        </p>
                        <p>
                            The parameters of each component were passed to interfaces, and the components themselves were constants.
                            This allows the picoCTF developers to easily pass information to each of these components using their API.
                            After each component was created, they were added to Storybook so that the developers could easily see what they looked like, how they functioned, and what their parameters were.
                        </p>
                    </div>
                </div>
                {/* <div className='Section'>
                    <div>
                        <h3>Takeaways</h3>
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

export default PicoCTFCapstoneProject;