import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from "jquery";
import rd3 from 'react-d3';



class MeetingAnalysis extends Component {
  constructor(props) {
   super(props);


 }

 renderPieChart() {
    var PieChart = rd3.PieChart
    var data = [
        {label:'비즈니스',value:23},
        {label:'디지털',value:16},
        {label:'요구',value:13},
        {label:'사항',value:9},
        {label:'고객',value:9},
        {label:'트랜스',value:8}
   ]

		return(
      <PieChart data={data} radius={120} innerRadius={20} width={450} height={400} />
    )
	}

  renderKeywordTable() {
        var data = [
        '기업','운영','기존','관리','방식','탈피','디지털','기술','가미','트랜스','트랜스포메이션','포메이션','기업규모','규모','모든','비즈니스','필요','물류','금융','의료','의료서비스','서비스','등등',
        '다양','산업','산업군','군','요구','수','고객','직원','우수','경험','제공','혁신적','프로세스','사용','속도','진화','오늘날','환경','솔루션','이것','세계적','기업간의','간의','경쟁','방법',
        '이','비용','향상','핵심','전환','최신','최신기술','수용','생각','조직','문화','변화','초점','사항','해결','신속','대응','마련','리더','충족','혁신','주도','지속적','개선','활동',
        '가속화','제품','출시','시간','단축','조직원','역량','마인드','긍정적','은','소비자','행동','시장','요인','요소','혼란','빅','빅데이터','데이터','클라우드','인공','인공지능','지능','적용','시스템',
        '때문','점차','가치','부여','노력','절감','결과','시작','기대','요구사항','무엇','파악','중요','편리','이유','발전','지에','대한','여부','성공적','아래','성숙도','1','측면','결과적',
        '브랜드','충성','높임','2','오리엔테이션','중심','의사','결정','촉진','성능','투명성','디지털화','화','3','새','모델','부응','세계','변혁','폭풍','조직운영','뿐','구조','전반','영향',
        '생산','창출','앞장'
      ];

				$('#textpaper1 >p ').remove();
				var str="<p>";
				var j=1;
				for(var i=0;i<data.length;i++){

					if(i==20*j){

						str+=data[i]+"<br>";
						j++;
					}else{
						str+=data[i]+", ";
					}

				}
				$('#textpaper1').append(str);
	}

  componentDidMount() {
    this.renderKeywordTable();
  }

  componentDidUpdate(prevProps, prevState){
    this.renderKeywordTable();
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
          <h3>
            키워드 분석차트
          </h3>
          <div className="panel panel-default">
            <div className="panel-body" style={{overflowX: "auto"}}>
              <div id="pie">
                {this.renderPieChart()}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
            <h3>세부 키워드</h3>
            <div className="panel panel-default">
              <div className="panel-body" style={{ overflowY: "auto", height: "435px"}}>
                <div className="table-responsive">
                  <div id="textpaper1"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
  }
}



export default MeetingAnalysis;
