import React, { Component } from 'react';


class Clock extends Component {

  pad = (num) => {
      return num < 10 ? '0' + num : '' + num;
  }

  render(){
    return(
        <div id = "clock" onClick = {this.props.startStopTimer} className = {"timer " + this.props.onProgress}>
          <h1 id = "clockDigit"> {this.pad(this.props.currentMinute)} : {this.pad(this.props.currentSeconds)} </h1>
          <p> ON PROGRESS: {this.props.onProgress.toUpperCase()} </p>
      </div>
    );
  }
}

export default Clock;
