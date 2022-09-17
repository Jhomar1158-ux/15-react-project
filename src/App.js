import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar"
import { Contador } from './components/Contador';
import {Form} from './components/Form';
import { Reloj } from './components/Reloj';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <Contador/> */}
      {/* <Form/> */}
      <Reloj/>
    </div>
  );
}

export default App;
