import Footer from '../Components/General/Footer.tsx';
import Header from '../Components/General/Header.tsx';
import './Page.css';

function About() {
  	return (
    	<div className="PageContainer">
        	<Header pageName={'About'}/>
       		<div className='PageBody'>
            	<div className='Contents'>
					<div className='Section'>
						<svg className="SVG" viewBox="0 0 850 850" style={{marginRight: "10px"}}>
							<image href={'/Professional_Headshot_Square.svg'} width="100%" height="100%" preserveAspectRatio='xMidYMid meet'/>
						</svg>
						<p style={{marginLeft: "10px"}}>Text here hihkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkhjkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjh</p>
					</div>
                	{/* <svg viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg" href='/Professional_Headshot.svg' preserveAspectRatio="xMidYMid meet"/> */}
            	</div>
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
        	<Footer pageName={'About'}/>
    	</div>
  	);
}

export default About;