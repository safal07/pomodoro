import React, { Component } from 'react';


class Break extends Component {
  render(){
    return(
      <div id = "break" className = "setclock">
        <button onClick={this.props.subBreakLength} id = "sub_btn"> <i className="fa fa-caret-down" aria-hidden="true"></i> </button>
        <input onChange = {this.props.changeBreakLength} type = "number" value = {this.props.breakValue}/>
        <button onClick={this.props.addBreakLength} id = "add_btn"> <i className="fa fa-caret-up" aria-hidden="true"></i></button>
      </div>

    );
  }
}

export default Break;
