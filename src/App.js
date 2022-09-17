import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar"
import { Contador } from './components/Contador';
import {Form} from './components/Form';
import { Reloj } from './components/Reloj';
import { Reloj2 } from './components/Reloj2';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <Contador/> */}
      {/* <Form/> */}
      {/* <Reloj/> */}
      <Reloj2/>
    </div>
  );
}

export default App;
