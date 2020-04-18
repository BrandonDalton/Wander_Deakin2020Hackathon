import React from 'react';
import './App.scss';
import Countdown from 'react-countdown-now';

class Timer extends React.Component {
    clockRef = null;

    constructor(props) {
        super(props);
        this.state = {value: '', onStart: true};
        
        this.setClockRef = this.setClockRef.bind(this);
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.clear = this.clear.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      start() {
        this.clockRef.start();
    }

    pause() {
        this.clockRef.pause();
    }

    clear() {
        console.log(this.state)
            this.setState({value: ''});
    }

    setClockRef(ref) {
        this.clockRef = ref;
    }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log('Number Submitted ' + this.state.value);
        event.preventDefault();
      }


    render() {
      return (
        <div className="homePage--timerSection">
        <div className="timerSection--timerContainer">
          <div className="timerSection--timer">
           <h1>Get Productive</h1>
           <Countdown ref={this.setClockRef} autoStart={false} precision={0} date={Date.now() + (this.state.value * 1000)} />
          </div>
        </div>
        <div className="timerSection--timerControls">
          <div className="timerControls--formContainer">
          <form onSubmit={this.handleSubmit}>
        <label>
          Seconds:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
          </div>
          <div className="timerControls--buttons">
              <div className="button" onClick={this.start}>Start Clock</div>
              <div className="button" onClick={this.pause}>Pause Clock</div>
              <div className="button" onClick={this.clear}>Clear Clock</div>
          </div>
        </div>
      </div>
      )
     
  }
  }
  
  export default Timer;