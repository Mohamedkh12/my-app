import "./App.css";
import { Nav } from './Nav';
import {Heading} from "./Header"
import { About } from "./About";
import {Testimonials} from "./Testimonials"

import Specials from "./Specials";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Heading/>
      </header>
      <main>
        <Specials/>
        <Testimonials/>
        <About/>
      </main>
    
    </div>
  );
}

export default App;
