import './App.css';
import { Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import Projects from './Pages/Projects/Projects';
import Solutions from "./Pages/Solutions/Solutions"
import Technologies from './Pages/Technologies/Technologies';
import Achievements from './Pages/Achievements/Achievements';
import Certifications from './Pages/Certifications/Certifications';
import Contact from './Pages/Contact/Contact';
import Reviews from './Pages/Reviews/Reviews';


function App() {
  return (
    <div className="App">
      <Route exact path="/"><Landing/></Route>
      <Route path="/home"><Home/></Route>
      <Route path="/solutions"><Solutions/></Route>
      <Route path="/projects"><Projects/></Route>
      <Route path="/technologies"><Technologies/></Route>
      <Route path="/achievements"><Achievements/></Route>
      <Route path="/certifications"><Certifications/></Route>
      <Route path="/contact"><Contact/></Route>
      <Route path="/reviews"><Reviews/></Route>
    </div>
  );
}

export default App;
