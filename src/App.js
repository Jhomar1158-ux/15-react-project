import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar"
import { Contador } from './components/Contador';


function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Contador/>      
    </div>
  );
}

export default App;
