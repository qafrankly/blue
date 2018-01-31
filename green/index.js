import React, { Component, PropTypes } from 'react';

class green1 extends Component {
	
  render(){
	  
    return (
      <div className='FranklyModulesDemo'>
	      <h2 className='demo_text'>green: {this.props.text}</h2>
      </div>
    );
	  
  }
}

export default green1;
