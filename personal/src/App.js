import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/Navbar';
import {Banner} from './components/Banner'
import {Resume} from './components/Resume'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Resume />
    </div>
  );
}

export default App;
