import logo from './logo.svg';
import './App.css';
import CompoA from './components/container/compoA';
import { Contacto } from './model/contacto.class';

function App() {

  const defaultContacto = new Contacto('Willian','Castro','aldavid79@gmail.com',false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CompoA contacto={defaultContacto}></CompoA>
      </header>
    </div>
  );
}

export default App;
