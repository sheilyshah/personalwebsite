import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/Navbar';
import {Banner} from './components/Banner'
import {Resume} from './components/Resume'
import {Writing} from './components/Writing'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner id="home" />
      <Resume id="resume"/>
      <Writing id="writing" />
    </div>
  );
}

export default App;
