import React from 'react';
// import {Link} from 'react-router-dom';
import logo from './Initials_Logo_MS.png';
import me from './seated_in_chair_dog.jpeg';
import './reset.css';
import './App.css';
// import './Components/About';
// import './Components/Contact';
// import './Components/Work';

function App() {
  return (
    <div className="App">
      <section className='whole-page'>
        <header className="App-header">
          <div className='left-stuff'>
            <div className='logo-container'>
              <div className='logo'>MS</div>
              {/* <img src={logo} alt='logo'/> */}
            </div>
            <div className='name-title'>
              <h1 className='name'>Morgan Shaw</h1>
              <h1 className='title'>|  Web Developer</h1>
            </div>
          </div>
          <div className='links'>
            <h2>Home</h2>
            <h2>Projects</h2>
            <h2>Contact</h2>
          </div>
        </header>
        <div className='picture'>
          {/* <img src={me} alt='seated with laptop and dog'/> */}
        </div>
      </section>
    </div>
  );
}

export default App;
