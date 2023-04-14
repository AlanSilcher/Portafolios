import './App.css';
import { Route } from 'react-router-dom'
import Me from './Pages/Me/Me';
import Projects from './Pages/Projects/Projects';
import Solutions from "./Pages/Solutions/Solutions"
import Technologies from './Pages/Technologies/Technologies';
import Achievements from './Pages/Achievements/Achievements';
import Certifications from './Pages/Certifications/Certifications';
import Contact from './Pages/Contact/Contact';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Route exact path="/"><Me/></Route>
      <Route path="/me"><Me/></Route>
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
