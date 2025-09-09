import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
import { Link } from 'react-router-dom';

function GiantEagleAccessibilityDesign() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Giant Eagle Accessibility Design</h1>
                <List>
                    <InfoCard title="Role">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Researcher
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UI/UX Designer
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            3D Modeler
                        </h2>
                    </InfoCard>
                    <InfoCard title="Timeline">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            March 2025 - May 2025
                        </h2>
                    </InfoCard>
                    <InfoCard title="Skills">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Figma
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UX Design
                        </h2>
                    </InfoCard>
                    <InfoCard title="External Link">
                        <a style={{width: "100%", textAlign: "center", fontSize: "24px"}} href="/Giant_Eagle_Accessibility_Design_Documentation.pdf" target='_blank'><b>Documentation</b></a>
                        {/*<Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://www.figma.com/proto/gMJsFsJdz6J4TI3UMjAj0D/Giant-Eagle-Design?page-id=433%3A5935&node-id=540-6198&viewport=386%2C95%2C0.19&t=L1Z9mSVomDNSSQXU-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=540%3A6198" target='_blank'><b>Live Demo</b></Link>*/}
                        <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://youtu.be/ZFkN_IGNRPI?si=XOoE0MQ51gEMbdBq" target='_blank'><b>Showcase</b></Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            In a team of five, I researched and designed ways to improve accessibility at grocery stores using AR technology.
                            As a team, we researched the affects of ADHD and determined how we wanted to address and assist users with this disability in our design.
                            After deciding the aspects of these disabilities we wished to address, we moved into the design phase of the project, where I designed components for an AR interface accessed using glasses.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Design Decisions</h3>
                        <p>
                            The biggest challenge with this particular project was overcoming the difference between my team's abilities of our target user base.
                            In order to determine what the struggles of this group were, we specifically asked users who were willing to share their struggles with grocery shopping and also read many personal anecdotes of people that had shared their experiences online.
                            We also visited grocery stores ourselves and noted down any physical or mental limitations that could limit someone with a disability.
                            As a result of our queries, we determined that our focus should be on limiting stimulation for people with cognitive disabilities, as a number of people cited the choices and visuals of the stores to be overwhelming.
                        </p>
                        <p>
                            Our solution to the problem of overwhelming stimuli was to create a way for users to see exactly where they need to go and how to get there without taking any detours.
                            We settled on creating AR glasses with a slim form factor to prevent more stimuli, yet left enough space in the design to make it more realistic with respect to the placement of electronics.
                            These glasses block out the bright packaging colors of many grocery store products, and they also provide guidance for navigating to the next element one's shopping list.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>UI/UX Implementation</h3>
                        <p>
                            After making our decisions and determining what we wanted to target with our design, we moved into creating prototypes for the glasses and the AR UI elements in Figma.
                            I began by working on the 3D model, as revising and reprinting the model would take more time than revising the UI elements.
                            My first pass of the glasses was slightly too thin, so we revised the glasses to be more realistic and gave them the ability to fit over existing glasses as-needed by cutting grooves into the frames.
                            In Figma, I worked on components related to store navigation including showing the user what was next in their navigation, directing them where to go, and allowing them to skip items when needed.
                            The reactivity of these components was quite important to me, so I made the numbers scroll in the navigation component when adding items to the cart while ensuring that they were not a distraction to the user.
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

export default GiantEagleAccessibilityDesign;