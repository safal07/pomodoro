import React, { Component } from 'react';


class Session extends Component {
  render(){
    return(
      <div id = "session" className = "setclock show_up">
        <button onClick={this.props.subSessionLength} id = "sub_btn"> <i className="fa fa-caret-down" aria-hidden="true"></i> </button>
        <input onChange = {this.props.changeSessionLength} type = "number" value = {this.props.sessionValue} min="1" max="99"/>
        <button onClick={this.props.addSessionLength} id = "add_btn"> <i className="fa fa-caret-up" aria-hidden="true"></i></button>
      </div>

    );
  }
}

export default Session;
