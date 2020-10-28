import React from 'react';
// import {Link} from 'react-router-dom';
import logo from './Initials_Logo_MS.png';
// import me from './final_answer_des.jpeg';
import me from './cropped_more_right_des.jpeg';
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
            <h2>Work</h2>
            <h2>Contact</h2>
          </div>
        </header>
        <section className='main-content'>
          <div className='pic-overlay'>
            <div className='about-text'>
              <div className='subheading'>
                <h1>Curiosity. </h1>
                <h1>Teamwork. </h1>
                <h1>Integrity. </h1>
                
              </div>
              <p>What do you get when you cross a web developer with a flight attendant, MPA grad, Disney intern, and composer? In a nutshell, you get a curious, creative, detail- and growth-oriented tech professional who brings a variety of skills to the programming table, including the ability to work with a diverse group of people and industries, to hone in on specific areas for improvement, and to solve complex problems.
              <br/>
              <br/>
              In my college days, I spent hours behind a computer bringing my music to life, and I've come full circle to do the same thing with web apps today. 
              </p>
              <br/>
              <p>My software development skills are new, but my passion for learning, growth, and adding value to an organization is not. Let's talk about how I can contribute to your team.</p>
              <br/>
              <p>More about me...</p>

            </div>
          </div>
          {/* <div className='picture'> */}
            {/* <img src={me} alt='seated with laptop and dog'/> */}
          {/* </div> */}
          

        </section>
      </section>
    </div>
  );
}

export default App;
