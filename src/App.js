import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js'
import Session from './Session.js'
import Break from './Break.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTimer: true,
      sessionValue: 20,
      breakValue: 5,
      currentSeconds: 0,
      currentMinute: 0,
      onProgress: 'session'
    }
    this.timer = this.timer.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.changeSessionLength = this.changeSessionLength.bind(this);
    this.changeBreakLength = this.changeBreakLength.bind(this);
    this.addSessionLength = this.addSessionLength.bind(this);
    this.subSessionLength = this.subSessionLength.bind(this);
    this.addBreakLength = this.addBreakLength.bind(this);
    this.subBreakLength = this.subBreakLength.bind(this);
  }

  componentDidMount(){
    this.setState({currentMinute: this.state.sessionValue});
  }

  timer(){
    if(this.state.currentMinute === 0 && this.state.currentSeconds === 0 && this.state.onProgress !== 'break') {
        this.setState(
          {currentMinute: this.state.breakValue,
            currentSeconds: 0,
            onProgress: 'break'
          });
    }
    else if(this.state.currentMinute === 0 && this.state.currentSeconds === 0 && this.state.onProgress === 'break') {
      this.startStopTimer();

    }
    else if(this.state.currentSeconds === 0){
      this.setState(
        {
        currentSeconds: 59,
        currentMinute: this.state.currentMinute - 1
      });
    }
    else{
      this.setState({currentSeconds: this.state.currentSeconds - 1});
    }

  }

  changeSessionLength(event) {
    if (event.target.value >= 100) {
      this.setState({sessionValue: 100,  currentMinute: 100});
    }
    else if (event.target.value <= 0) {
      this.setState({sessionValue: 1,  currentMinute: 1});
    }
    else {
      this.setState({sessionValue: event.target.value, currentMinute: event.target.value});
    }
    this.setState({currentSeconds: 0});
  }

  changeBreakLength(event) {
    if (event.target.value >= 100) {
      this.setState({breakValue: 100});
    }
    else if (event.target.value <= 0) {
    this.setState({breakValue: 0});
    }
    else {
      this.setState({breakValue: event.target.value});
    }
    this.setState({currentSeconds: 0});
  }

  addSessionLength(){
    if(this.state.sessionValue !== 100) {
        this.setState({sessionValue: this.state.sessionValue + 1});
        this.setState({currentMinute: this.state.sessionValue});
    }
    this.setState({currentSeconds: 0});
  }

  subSessionLength(){
    if(this.state.sessionValue !== 1) {
      this.setState({sessionValue: this.state.sessionValue - 1});
      this.setState({currentMinute: this.state.sessionValue});
    }
    this.setState({currentSeconds: 0});
  }

  addBreakLength(){
    this.setState({breakValue: this.state.breakValue + 1});
    this.setState({currentSeconds: 0});
  }

  subBreakLength(){
    if(this.state.breakValue !== 1) {
      this.setState({breakValue: this.state.breakValue - 1});
    }
  }

  startStopTimer(){
    if(this.state.startTimer) {
      this.setState({startTimer: !this.state.startTimer});
      this.myVar = setInterval(this.timer, 1000);
      document.getElementById("session").classList.add("hide_up");
      document.getElementById("break").classList.add("hide_down");
      document.getElementById("clockDigit").classList.add("large");
    }
    else {
      clearInterval(this.myVar);
      this.setState({startTimer: !this.state.startTimer});
      document.getElementById("session").classList.remove("hide_up");
      document.getElementById("break").classList.remove("hide_down");
      document.getElementById("clockDigit").classList.remove("large");

    }

  }

  render() {
    return (
      <div className="app">
          <Session
          currentMinute = {this.state.currentMinute}
          currentSeconds = {this.state.currentSeconds}
          sessionValue = {this.state.sessionValue}
          changeSessionLength = {this.changeSessionLength}
          addSessionLength= {this.addSessionLength}
          subSessionLength = {this.subSessionLength}
          />
          <Clock
          currentMinute = {this.state.currentMinute}
          currentSeconds = {this.state.currentSeconds}
          startStopTimer = {this.startStopTimer}
          onProgress = {this.state.onProgress}
          />
          <Break
          currentMinute = {this.state.currentMinute}
          currentSeconds = {this.state.currentSeconds}
          breakValue = {this.state.breakValue}
          changeBreakLength = {this.changeBreakLength}
          addBreakLength= {this.addBreakLength}
          subBreakLength = {this.subBreakLength}
          />
      </div>
    );
  }
}

export default App;
