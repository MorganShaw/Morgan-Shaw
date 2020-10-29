import React from 'react';
// import {Link} from 'react-router-dom';
import logo from './Initials_Logo_MS.png';
// import me from './final_answer_des.jpeg';
import me from './last_attempt_edited_des.jpeg';
// import arrow from './6438188.png';
import arrow from './downward.svg';
import './reset.css';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                <h1 className='smaller'>Composer → MPA → Teacher → Flight Attendant → </h1>
                <br/>
                <br/>
                <h1 className='bigger'>Full-Stack Web Developer </h1>
                {/* <h1>Teamwork. </h1>
                <h1>Growth. </h1> */}
                
              </div>
              <p> I took an unconventional path to get here, but it’s made me a creative, analytical, growth-oriented, team-driven professional who can work with a diverse group of people (and industries), learn quickly, and see the bigger picture. 
              </p>
              <br/>
              <br/>
              {/* <div className='about-text-styled'>
                <p>I code primarily in <p  className='bigger-focus'>JavaScript, HTML, and CSS, </p>using React, Node, Express, and PostgreSQL. My toolbox also includes RESTful APIs, Postman, Massive, Git, GitHub, Debugging, JSON, React Context and Hooks, Redux, SCSS, and Socket.IO. 
                </p>
              </div> */}
              <p>I code primarily in <span  className='bigger-focus'>JavaScript</span>, <span  className='bigger-focus'>HTML</span>, and <span  className='bigger-focus'>CSS</span>, using <span  className='bigger-focus'>React</span>, <span  className='bigger-focus'>Node</span>, <span  className='bigger-focus'>Express</span>, and <span  className='bigger-focus'>PostgreSQL</span>. My toolbox also includes RESTful APIs, Postman, Massive, Git, GitHub, Debugging, JSON, React Context and Hooks, Redux, SCSS, and Socket.IO. 
              </p>
              <br/>
              <br/>
              <p>If this sounds good to you, take a minute to look around and see how I can contribute to your team. </p>

            </div>
            <div className='arrow'>
             
              <img src={arrow} alt='arrow'/>
            
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
