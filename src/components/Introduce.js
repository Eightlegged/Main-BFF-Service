import React, { Component } from 'react';
import $ from "jquery";

import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import Function from './function.jpg';

class Introduce extends Component {
  componentDidMount(){
    $('#introduce').hide();
  }

  render() {
    return (
      <div className="container-fluid">
          <br/>
          <div className="row">
          <div id="carousel-example-generic" className="carousel slide">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                 <div className="carousel-inner">
                    <div className="item active">
                       <img src={slide1} alt="First slide"/>
                    </div>
                    <div className="item">
                       <img src={slide2} alt="Second slide"/>
                    </div>
                    <div className="item">
                       <img src={slide3} alt="Third slide"/>
                    </div>
                 </div>

                  <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span className="icon-prev"></span>
                  </a>
                  <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                    <span className="icon-next"></span>
                  </a>
          </div>
          <br/>
          <br/>
          <div>
            <center><img src={Function} className="img-responsive"/></center>
          </div>
          </div>
      </div>

    );
  }

}

export default Introduce;
