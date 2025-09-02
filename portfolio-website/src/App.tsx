import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import RoboticDrumMachine from './Pages/Project_Pages/Robotic_Drum_Machine'
import AICharacterChatbot from './Pages/Project_Pages/AI_Character_Chatbot'
import FluteSynthesizer from './Pages/Project_Pages/Flute_Synthesizer'
import CharacterCreator from './Pages/Project_Pages/Character_Creator'
import GiantEagleAccessibilityDesign from './Pages/Project_Pages/Giant_Eagle_Accessibility_Design'
import BumbleMeet from './Pages/Project_Pages/Bumble_Meet'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PicoCTFCapstoneProject from './Pages/Project_Pages/PicoCTF_Capstone_Project'

function App() {
  	// initialize a browser router
  	const router = createBrowserRouter([
    	{
      		path: "/",
      		element: <Home/>,
    	},
    	{
      		path: "/about",
      		element: <About/>,
    	},
    	{
      		path: "/projects",
      		element: <Projects/>,
    	},
    	{
      		path: "/projects/robotic-drum-machine",
      		element: <RoboticDrumMachine/>
    	},
    	{
      		path: "/projects/ai-character-chatbot",
      		element: <AICharacterChatbot/>
    	},
    	{
      		path: "/projects/picoctf-capstone-project",
      		element: <PicoCTFCapstoneProject/>
    	},
    	{
      		path: "/projects/flute-synthesizer",
      		element: <FluteSynthesizer/>
    	},
    	{
      		path: "/projects/character-creator",
      		element: <CharacterCreator/>
    	},
    	{
      		path: "/projects/giant-eagle-accessibility-design",
      		element: <GiantEagleAccessibilityDesign/>
    	},
    	{
      		path: "/projects/bumble-meet",
      		element: <BumbleMeet/>
    	}
  	])

  	return (
      	<RouterProvider router={router} />
  	)
}

export default App
