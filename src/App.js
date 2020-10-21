import React from 'react';
// import {Link} from 'react-router-dom';

import './reset.css';
import './App.css';
// import './Components/About';
// import './Components/Contact';
// import './Components/Work';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='typewriter'>Hi, I'm Morgan Shaw.</h1>
      </header>
      <div className='picture-border'></div>
      <div className='main-section'>
        <div className='column'>
          <div className='child-left'>
            {/* <div className='overlay'> */}
              <span className='text'>ABOUT</span>
            {/* </div> */}
          </div>
        </div>
        <div className='column'>
          <div className='child-mid'>
            {/* <div className='overlay'> */}
              <span className='text'>WORK</span>
              {/* <Link to='/work'> */}
                <span className='small-text'>Take a tour <br/>of my work.</span>
              {/* </Link>  */}
            {/* </div> */}
          </div>
        </div>
        <div className='column'>
          <div className='child-right'>
            {/* <div className='overlay'> */}
              <span className='text'>CONTACT</span>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
