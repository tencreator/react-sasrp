import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";
import './assets/css/style.css';
import Home from "./pages/home";
import Rules from "./pages/Rules";
import About from "./pages/About";

function App() {
  return (
    <>
    <Navbar/>
    <main>
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Rules" element={ <Rules/> } />
        <Route path="/About" element={ <About/> } />
      </Routes>
    </Router>
    </main>

    <div class="copyright">
      Made by KKinsey <br/>
      SASRP™ 2022  
    </div>

    <img class="gta-cha no-select" draggable="false"  src="https://cdn.discordapp.com/attachments/916700373534777374/949344255162339388/Player.png" alt=""/>
    <div class="backdrop no-select">
        <img class="fade no-select"  draggable="false" src="https://cdn.discordapp.com/attachments/916700373534777374/949006841587834900/TZ.png" alt=""/>
    </div>
    <div class="advertisments">
      <div class="discord-ad">
      <iframe title="discord advertisment" src="https://canary.discord.com/widget?id=798273079624073256&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
      </div>
    </div>
    </>
  );
}

export default App;
