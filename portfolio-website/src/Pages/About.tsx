import Footer from '../Components/General/Footer.tsx';
import Header from '../Components/General/Header.tsx';
import './Page.css';

function About() {
  	return (
    	<div className="PageContainer">
			<div className="HeroContainer">
				<Header pageName={'About'}/>
				<div className='Section' style={{ justifyItems: "center", marginTop: "50px", marginBottom: "250px", marginInline: "10%"}}>
					<svg className="SVG" viewBox="0 0 850 850" style={{marginRight: "10px"}}>
						<image href={'/Professional_Headshot_Square.svg'} width="100%" height="100%" preserveAspectRatio='xMidYMid meet'/>
					</svg>
					<p style={{marginLeft: "10px"}}>
						Hello! I'm Melissa, and in my free time I love combining art and technology to create beautiful, interactive experiences.
						A few of my hobbies include 3D modeling and printing, game development, and pixel art.
					</p>
				</div>
			</div>
       		<div className='PageBody'>
				<div className="Section">
					<p>
						I picked up my 3D modeling and game development hobbies in early 2021 and have been experimenting in those mediums ever since!
						My favorite 3D games tend to have very stylized graphics that require specific placement of topology and UV maps, so I have spent my time learning to emulate these styles.
						I especially love character modeling, as it is incredibly rewarding to conceptualize a character and bring it to life with textures and rigging.
					</p>
				</div>
				<div className="Section">
					<svg className="SVG" viewBox="0 0 850 850" style={{marginRight: "10px"}}>
						<image href={'/Professional_Headshot_Square.svg'} width="100%" height="100%" preserveAspectRatio='xMidYMid meet'/>
					</svg>
					<p>
						In addition to character and asset modeling, I have also dabbled in 3D printing.
						My favorite 3D printing project was a little pumpkin that I made for a competition while pursuing my undergraduate degrees.
						The render of the pumpkin won the 3D modeling competition, and I now use the 3D prints as some fun Halloween decor!
					</p>
				</div>
        	</div>
        	<Footer pageName={'About'}/>
    	</div>
  	);
}

export default About;
