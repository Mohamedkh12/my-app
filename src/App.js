import "./App.css";
import { Nav } from './Nav';
import {Heading} from "./Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Heading/>
      </header>
    </div>
  );
}

export default App;
