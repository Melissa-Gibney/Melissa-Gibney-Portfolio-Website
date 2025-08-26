import Footer from '../Components/General/Footer.tsx';
import Header from '../Components/General/Header.tsx';
import './About.css';

function About() {
  return (
    <div className="About">
        <Header pageName={'About'}/>
        <h1>About Page Here</h1>
        <Footer/>
    </div>
  );
}

export default About;