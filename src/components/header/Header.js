import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import TeamLogo from '../../img/TeamLogo.png';


class Header extends Component{
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);

  }

  componentWillUpdate(nextProps, nextState) {
  };

  renderLogin(){
    if(!this.props.authentication.status.isLoggedIn){
      return(
        <li>
          <Link to="/login">
            로그인
          </Link>
        </li>
      );
    }
  }
  renderSignup(){
    if(!this.props.authentication.status.isLoggedIn){
      return(
        <li>
          <Link to="/signup">
            회원가입
          </Link>
        </li>
      );
    }
  }

  renderAuthenicationButton(){
    if(this.props.authentication.status.isLoggedIn){
      return (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>{this.props.authentication.status.currentUser}<b className="caret"></b></a>
            <ul className="dropdown-menu">
                <li>
                    <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                </li>
                <li className="divider"></li>
                <li>
                    <a onClick={this.handleLogout}><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                </li>
            </ul>
        </li>

      );
    }
  }


  handleLogout() {
      let loginData = {
        isLoggedIn: false,
        email: ""
      }
      document.cookie = 'key=' + btoa(JSON.stringify(loginData));
      this.props.logoutRequest()
      return (<Redirect to='/'/>);
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Smart Meeting Assistant</Link>
          </div>

          <ul className="nav navbar-right top-nav">
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"></i> <b className="caret"></b></a>
                  <ul className="dropdown-menu message-dropdown">
                      <li className="message-preview">
                          <a href="#">
                              <div className="media">
                                  <span className="pull-left">
                                      <img className="media-object" src="http://placehold.it/50x50" alt="" />
                                  </span>
                                  <div className="media-body">
                                      <h5 className="media-heading">
                                          <strong>John Smith</strong>
                                      </h5>
                                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li className="message-preview">
                          <a href="#">
                              <div className="media">
                                  <span className="pull-left">
                                      <img className="media-object" src="http://placehold.it/50x50" alt="" />
                                  </span>
                                  <div className="media-body">
                                      <h5 className="media-heading">
                                          <strong>John Smith</strong>
                                      </h5>
                                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li className="message-preview">
                          <a href="#">
                              <div className="media">
                                  <span className="pull-left">
                                      <img className="media-object" src="http://placehold.it/50x50" alt="" />
                                  </span>
                                  <div className="media-body">
                                      <h5 className="media-heading">
                                          <strong>John Smith</strong>
                                      </h5>
                                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li className="message-footer">
                          <a href="#">Read All New Messages</a>
                      </li>
                  </ul>
              </li>
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></a>
                  <ul className="dropdown-menu alert-dropdown">
                      <li>
                          <a href="#">Alert Name <span className="label label-default">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-primary">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-success">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-info">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-warning">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-danger">Alert Badge</span></a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">View All</a>
                      </li>
                  </ul>
              </li>
              {this.renderLogin()}
              {this.renderSignup()}
              {this.renderAuthenicationButton()}
          </ul>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav side-nav">
                  <li>
                      <Link to="/"><i className="fa fa-fw fa-desktop"></i> 서비스 소개</Link>
                  </li>
                  <li>
                      <Link to="/meetinglist"><i className="fa fa-fw fa-table"></i> 회의 보기</Link>
                  </li>
                  <li>
                      <Link to="/create"><i className="fa fa-fw fa-edit"></i> 회의 생성</Link>
                  </li>
                  <li>
                      <Link to="/SttTest"><i className="fa fa-fw fa-dashboard"></i> 대시보드</Link>
                  </li>
                  <li style={{position: "absolute", bottom: "10px"}}>
                  </li>
              </ul>
          </div>
      </nav>
      </div>
    );
  }
}

export default Header;
