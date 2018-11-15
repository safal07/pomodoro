import React, { Component } from 'react';


class Clock extends Component {
  render(){
    console.log(this.props.currentMinute);
    var getTime = () => {
      if(this.props.currentSeconds <= 9 && this.props.currentMinute  <= 9) {
          return "0" + (this.props.currentMinute) +" : 0" +this.props.currentSeconds;
      }
      else if(this.props.currentSeconds <= 9){
        return (this.props.currentMinute) +" :0" + this.props.currentSeconds;
      }
      else if(this.props.currentMinute <= 9){
        return "0" + (this.props.currentMinute) +" : " + this.props.currentSeconds;
      }
      else {
        return (this.props.currentMinute) +" : " + this.props.currentSeconds;
      }

    }

    return(
        <div id = "clock" onClick = {this.props.startStopTimer} className = "timer">
          <h1> {getTime()} </h1>
        </div>


    );
  }
}

export default Clock;
