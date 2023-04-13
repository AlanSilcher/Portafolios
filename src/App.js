import './App.css';
import Home from './View/Home/Home';
import Landing from './View/Landing/Landing';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path="/"><Landing/></Route>
      <Route path="/home"><Home/></Route>
    </div>
  );
}

export default App;
