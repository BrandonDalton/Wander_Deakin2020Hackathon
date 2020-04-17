import React from 'react';
import './App.scss';
import Countdown from 'react-countdown-now';

class Timer extends React.Component {
    

    render() {
      return (
        <div className="homePage--timerSection">
        First Section
        <div className="timerSection--timerContainer">
          <div>
           <h1>Timer</h1>
           <Countdown date={Date.now() + 10000} />,
          </div>
        </div>
        <div className="timerSection--timerControls">
          <div>
            <button>Start</button>
          </div>
        </div>
      </div>
      )
     
  }
  }
  
  export default Timer;