import './App.css';
import Mensaje from './Mensaje.js';



const App = () => {

  return (
    <div className="App">
      <Mensaje  color="red"  message= "Trabajando Midudev"/>
      <Mensaje  color="green" message= "React"/>
      <Mensaje  color="blue" message= "Props"/>

    </div>
  );
}

export default App;
