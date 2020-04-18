import React from 'react';
import Button from '@material-ui/core/Button';
import Countdown from 'react-countdown-now';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import './App.scss';

class Timer extends React.Component {
  clockRef = null;

  constructor(props) {
    super(props);
    this.state = { value: '', onStart: true };

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
    this.setState({ value: '' });
  }

  setClockRef(ref) {
    this.clockRef = ref;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('Number Submitted ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div className="homePage--timerSection">
        <Card>
          <CardContent>
            <div className="timerSection--timerContainer">
              <div className="timerSection--timer">
                <h1>Get Productive</h1>
                <Countdown ref={this.setClockRef} autoStart={false} precision={0} date={Date.now() + (this.state.value * 60000)} />
              </div>
            </div>
            <div className="timerSection--timerControls">
              <div className="timerControls--formContainer">
                <form onSubmit={this.handleSubmit}>
                  <TextField label="Minutes" value={this.state.value} onChange={this.handleChange} />
                </form>
              </div>
              <div className="timerControls--buttons">
                <Button variant="contained" color="primary" onClick={this.start}>Start</Button>
                <Button variant="contained" color="secondary" onClick={this.pause}>Pause</Button>
                <Button variant="contained" onClick={this.clear}>Clear</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Timer;