import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



class MeetingAnalysis extends Component {
  constructor(props) {
   super(props);


 }


  render(){
    return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h3>회의 기본 정보</h3>
          <div className="panel panel-default">
            <div className="panel-body">
              <p>주제: {this.props.data.title}</p>
              <p>날짜: {this.props.data.date}</p>
              <p>시간: {this.props.data.startTime}</p>
              <p>코멘트</p>
              <p>{this.props.data.comment}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h3>회의 참가인원</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>순서</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>샘플</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.userList.map((data, i) => {
                  return(
                    <tr key={i+1}>
                      <td scope="row">{i+1}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>뭘넣어야할까용</td>
                    </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-lg-12">
              <h3>구조화 문서</h3>
          </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6">
            <h3>키워드 분석 차트</h3>
        </div>
        <div className="col-lg-6 col-md-6">
            <h3>세부 키워드</h3>
        </div>
      </div>
    </div>
  );
  }
}



export default MeetingAnalysis;
