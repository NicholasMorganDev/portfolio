
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery'
import Skill from './components/Skill';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <About/>
        <Gallery/>
        <Skill/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
