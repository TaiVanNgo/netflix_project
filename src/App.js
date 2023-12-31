import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro.js'
import Contents from './components/Contents/Contents.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
    </div>
  );
}

export default App;
