import './Project_Page.css';
import Header from '../../Components/General/Header.js';
import Footer from '../../Components/General/Footer.js';
import List from '../../Components/General/List.js';
import InfoCard from '../../Components/General/InfoCard.js';
import { Link } from 'react-router-dom';

function BumbleMeet() {
  return (
    <div className="Project">
        <Header pageName={'Project'}/>
        <div className="PageBody">
            <div className='Contents'>
                <h1>Bumble Meet</h1>
                <List>
                    <InfoCard title="Role">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UI/UX Designer
                        </h2>
                    </InfoCard>
                    <InfoCard title="Timeline">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            February 2025 - March 2025
                        </h2>
                    </InfoCard>
                    <InfoCard title="Skills">
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            Figma
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UI Design
                        </h2>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            UX Design
                        </h2>
                    </InfoCard>
                    <InfoCard title="External Link">
                        <Link style={{width: "100%", textAlign: "center", fontSize: "24px"}} to="https://www.figma.com/proto/aPnKnVUM8CzhBjqNlAfkV8/Bumble-Design?page-id=1%3A3&node-id=75-692&viewport=187%2C137%2C0.4&t=sMH8nexsrRsITfqc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=79%3A659"><b>Figma Demo</b></Link>
                    </InfoCard>
                </List>
                <div className='Section'>
                    <div>
                        <h3>Summary</h3>
                        <p>
                            This project began as a need to design a new location-based feature for the Bumble app.
                            The goal for this feature was to ensure that users can connect with one another yet still feel safe while using the app.
                            In order to account for this, the new feature uses geofencing to allow users to find public spaces to meet.
                            The decision to incorporate geofencing in this way allows users to maintain privacy and safety while still meeting face-to-face.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Feature Design Decisions</h3>
                        <p>
                            The biggest hurdle to this project was finding a way to meet every design need for users while also bringing value to Bumble as a company.
                            There are dozens of ways to incorporate location services into a dating application, the most obvious of which being to show the location of others around you.
                            That use case was immediately rejected due to its inability to protect user privacy, but users still value meeting others face-to-face, so the feature of finding public places near you was devised.
                            Linking public spaces such as restaurants, movie theatres, stores, and parks is beneficial both for Bumble's users and for the company itself.
                            Bumble can collect fees from locations that wish to advertise their services in the Bumble app, while users have safe, public spaces where they can meet and grow their relationships.
                            This feature would only be available to premium Bumble users, incentivising more users to join the premium tier and boosting their userbase as a whole.
                        </p>
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>UI/UX Design Decisions</h3>
                        <p>
                            After devising the feature to design and determining why both Bumble as a company and the Bumble app users would benefit from this, I moved into designing the new feature's screens in Figma.
                            My first step was to determine how I wanted users to access this new feature, and I quickly decided that it would become a new tab within the Bumble app navigation.
                        </p>
                        {/*Show old vs new Bumble nav*/}
                        <p>
                            The main screen for this feature includes a visualization of the user's location and allows the user to adjust the geofencing range to include locations up to 1 mile away from their current location.
                            After selecting a distance with the slider at the bottom of the screen, users can choose a location they want to suggest to one of their matches from the menu at the top of the screen.
                            A message will then be sent to the match, allowing them to accept or deny the location.
                        </p>
                        {/*Show main feature screen and swiped-down version*/}
                        <p>
                            The chosen colors for this UI were taken from the official Bumble color guide.
                            As I was designing each part of the interface, I wanted to ensure that users were aware of how their location was being used, so I included a disclaimer explaining how the app was using their data.
                            I also allowed users to customize the locations that have show up and the matches they want to message.
                        </p>
                        {/*Show dropdown menus*/}
                    </div>
                </div>
                <div className='Section'>
                    <div>
                        <h3>Takeaways</h3>
                        <p>
                            While being able to design a feature and its UI from start to finish was an incredibly important experience, I would argue that the ability to identify how designs may benefit their stakeholders is a far more valuable skill.
                            Throughout the project, I considered both the users and the company to determine the best direction to take.
                            The experience designing UI taught me how to best incorporate a brand's identity into my own ideas.
                            I learned about the aspects of a good design and now can apply that knowledge across domains and projects in my career.
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

export default BumbleMeet;