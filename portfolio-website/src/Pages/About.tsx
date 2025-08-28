import Footer from '../Components/General/Footer.tsx';
import Header from '../Components/General/Header.tsx';
import './Page.css';

function About() {
  return (
    <div className="PageContainer">
        <Header pageName={'About'}/>
        <div className='PageBody'>
            <div className='Contents'>
                <h1>About Page Here</h1>
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