import React, { Component } from 'react';
import $ from "jquery";


class Introduce extends Component {
  componentDidMount(){
    $('#introduce').hide();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 id="introduce"> 소개 </h1>
      </div>
    );
  }

}

export default Introduce;
