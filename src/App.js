import React from 'react';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='typewriter'>Hi, I'm Morgan Shaw.</h1>
      </header>
      <div className='picture-border'></div>
      <div className='main-section'>
        <div className='column'>
          <div className='child left'>
            {/* <div className='overlay'> */}
              <span className='text'>ABOUT</span>
            {/* </div> */}
          </div>
        </div>
        <div className='column'>
          <div className='child mid'>
            {/* <div className='overlay'> */}
              <span className='text'>WORK</span>
            {/* </div> */}
          </div>
        </div>
        <div className='column'>
          <div className='child right'>
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
