import './App.css';
import ButtonSec from './button.js';
import ButtonAppBar from './AppBar';
import CarouselImage from './Caruosel';
import Contactos from './Contactos';
import Texto from './TextoBienvenida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonAppBar/>
      </header>
      <body className= "app-body">
        <Texto className = "texto"/>
        <CarouselImage className="Carrucel"></CarouselImage>
      </body> 
      <footer className="final">
        <Contactos/>
      </footer>
    </div>
  );
}

export default App;
