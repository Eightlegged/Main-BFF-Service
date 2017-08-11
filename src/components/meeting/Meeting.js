import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import MeetingList from './MeetingList';
import MeetingAnalysis from './MeetingAnalysis';
import MeetingCreate from './MeetingCreate';

class Meeting extends Component {
  constructor(props) {
    let DoneMeetings;
    let TodoMeetings;

    DoneMeetings = [
      {date : "2017-07-01", name : "ksd", etc: "...."},
      {date : "2017-07-02", name : "hyj", etc: "...."},
      {date : "2017-07-03", name : "asd", etc: "...."},
      {date : "2017-07-04", name : "wer", etc: "...."}

    ];

    TodoMeetings = [
      {date : "2017-08-09", name : "qwe", etc: "...."},
      {date : "2017-08-10", name : "hbf", etc: "...."},
      {date : "2017-08-11", name : "lui", etc: "...."},
      {date : "2017-08-12", name : "mvc", etc: "...."}

    ];


    super(props);
    this.state = {
      doneMeetings: DoneMeetings,
      todoMeetings: TodoMeetings
    };

  }

  render() {
    return (
      <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            회의 보기 <small>2</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="alert alert-info alert-dismissable">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <i className="fa fa-info-circle"></i>  <strong>Like SB Admin?</strong> Try out <a href="http://startbootstrap.com/template-overviews/sb-admin-2" className="alert-link">SB Admin 2</a> for additional features!
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-comments fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">26</div>
                                        <div>New Comments!</div>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-group" id="DoneList">
                              <li className="list-group-item">Cras justo odio</li>
                              <li className="list-group-item">Dapibus ac facilisis in</li>
                              <li className="list-group-item">Morbi leo risus</li>
                              <li className="list-group-item">Porta ac consectetur ac</li>
                              <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-tasks fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">12</div>
                                        <div>New Tasks!</div>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-group" id="DoingList">
                              <li className="list-group-item">Cras justo odio</li>
                              <li className="list-group-item">Dapibus ac facilisis in</li>
                              <li className="list-group-item">Morbi leo risus</li>
                              <li className="list-group-item">Porta ac consectetur ac</li>
                              <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                            </div>
                            <div className="panel-body">
                                <div id="morris-area-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-long-arrow-right fa-fw"></i> Donut Chart</h3>
                            </div>
                            <div className="panel-body">
                                <div id="morris-donut-chart"></div>
                                <div className="text-right">
                                    <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
                            </div>
                            <div className="panel-body">
                                <div className="list-group">
                                    <a href="#" className="list-group-item">
                                        <span className="badge">just now</span>
                                        <i className="fa fa-fw fa-calendar"></i> Calendar updated
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span className="badge">4 minutes ago</span>
                                        <i className="fa fa-fw fa-comment"></i> Commented on a post
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span className="badge">23 minutes ago</span>
                                        <i className="fa fa-fw fa-truck"></i> Order 392 shipped
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span className="badge">46 minutes ago</span>
                                        <i className="fa fa-fw fa-money"></i> Invoice 653 has been paid
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span className="badge">1 hour ago</span>
                                        <i className="fa fa-fw fa-user"></i> A new user has been added
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span className="badge">2 hours ago</span>
                                        <i className="fa fa-fw fa-check"></i> Completed task: "pick up dry cleaning"
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span className="badge">yesterday</span>
                                        <i className="fa fa-fw fa-globe"></i> Saved the world
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <span className="badge">two days ago</span>
                                        <i className="fa fa-fw fa-check"></i> Completed task: "fix error on sales page"
                                    </a>
                                </div>
                                <div className="text-right">
                                    <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>Order #</th>
                                                <th>Order Date</th>
                                                <th>Order Time</th>
                                                <th>Amount (USD)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>3326</td>
                                                <td>10/21/2013</td>
                                                <td>3:29 PM</td>
                                                <td>$321.33</td>
                                            </tr>
                                            <tr>
                                                <td>3325</td>
                                                <td>10/21/2013</td>
                                                <td>3:20 PM</td>
                                                <td>$234.34</td>
                                            </tr>
                                            <tr>
                                                <td>3324</td>
                                                <td>10/21/2013</td>
                                                <td>3:03 PM</td>
                                                <td>$724.17</td>
                                            </tr>
                                            <tr>
                                                <td>3323</td>
                                                <td>10/21/2013</td>
                                                <td>3:00 PM</td>
                                                <td>$23.71</td>
                                            </tr>
                                            <tr>
                                                <td>3322</td>
                                                <td>10/21/2013</td>
                                                <td>2:49 PM</td>
                                                <td>$8345.23</td>
                                            </tr>
                                            <tr>
                                                <td>3321</td>
                                                <td>10/21/2013</td>
                                                <td>2:23 PM</td>
                                                <td>$245.12</td>
                                            </tr>
                                            <tr>
                                                <td>3320</td>
                                                <td>10/21/2013</td>
                                                <td>2:15 PM</td>
                                                <td>$5663.54</td>
                                            </tr>
                                            <tr>
                                                <td>3319</td>
                                                <td>10/21/2013</td>
                                                <td>2:13 PM</td>
                                                <td>$943.45</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right">
                                    <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
  }

}

export default Meeting;
