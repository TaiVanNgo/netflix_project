import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro.js'
import Contents from './components/Contents/Contents.js';
import Menus from './components/Menus/Menus.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
    </div>
  );
}

export default App;
