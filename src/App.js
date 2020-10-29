import React from 'react';
// import {Link} from 'react-router-dom';
import logo from './Initials_Logo_MS.png';
// import me from './final_answer_des.jpeg';
import me from './last_attempt_edited_des.jpeg';
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
            <h2 className='link'>Home</h2>
            <h2 className='link'>About</h2>
            <h2 className='link'>Work</h2>
            <h2 className='link'>Contact</h2>
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
              <p>What do you get when you take a composer/MPA grad/teacher/flight attendant and put her through a coding bootcamp? A creative, growth-oriented web developer who can work with a diverse group of people (and industries), and who loves to solve problems.
              <br/>
              <br/>
              I code primarily in JavaScript, HTML, and CSS, using React, Node, Express, and PostgreSQL. My toolbox also includes RESTful APIs, Postman, Massive, Git, GitHub, Debugging, JSON, React Context and Hooks, Redux, SCSS, and Socket.IO. 

              </p>
              <br/>
              <p>Let's talk about how I can contribute to your team.</p>
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
