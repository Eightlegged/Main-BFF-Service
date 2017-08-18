import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import rd3 from 'react-d3';
import axios from 'axios';


var PieChart = rd3.PieChart;

class MeetingAnalysis extends Component {
  constructor(props) {
   super(props);


 }

 renderPieChart() {

    /*var data = [
        {label:'비즈니스',value:23},
        {label:'디지털',value:16},
        {label:'요구',value:13},
        {label:'사항',value:9},
        {label:'고객',value:9},
        {label:'트랜스',value:8}
   ]*/
   let url ="http://192.168.0.25:8088/detailpietextword/?part=" + (this.props.data.id).toString();
   //let url ="http://192.168.0.25:8088/detailpietextword/?part=MT1"
   axios.get(url).then((response) => {
     let data = response.data;
     var sum =0;
     for(var i in data){
       sum += data[i].value;
     }
     for(var i in data){
       data[i].value = (data[i].value * 100 / sum).toFixed(2);
     }
     ReactDOM.render(
         <PieChart data={data} radius={120} innerRadius={20} width={450} height={400} />,
       document.getElementById('pie'));
   }).catch((error) => {
       // FAILED
       ReactDOM.render(
           <div/>,
         document.getElementById('pie'));
   });

	}

  renderKeywordTable() {
    /*var data = [
      {keyword: "DT", keywordnum: 15},
      {keyword: "디지털", keywordnum: 13},
      {keyword: "트랜스포메이션", keywordnum: 12},
      {keyword: "기업", keywordnum: 10},
      {keyword: "가치", keywordnum: 9},
      {keyword: "SK", keywordnum: 8},
      {keyword: "Abril", keywordnum: 7},
      {keyword: "CloudZ", keywordnum: 6},
      {keyword: "클라우드", keywordnum: 5}
    ];*/
    let url ="http://192.168.0.25:8088/alldetailpietextword/?part=" + (this.props.data.id).toString();
    //let url ="http://192.168.0.25:8088/alldetailpietextword/?part=MT1"
    axios.get(url).then((response) => {
      let data = response.data;
      $('#keywordtable > tbody >tr').remove();
  		for (var i = 0; i < data.length; i++){
        $('#keywordtable > tbody').append(
  				'<tr><td>' + (i + 1) + '</td>' + '<td>'
  				+ data[i].keyword + '</td><td>'
  				+ data[i].keywordnum + '</td></tr>');
      }
    }).catch((error) => {
        // FAILED
        ReactDOM.render(
            <div/>,
          document.getElementById('#keywordtable > tbody'));
    });

  }

  renderStructedPaper() {
        //var text = '스마 구조화 문서 작업의 예시로 들기위해서 지금 글을 작성중입니다. 구조화 작업을 위해서 지금 작성중중중중중 스마 구조화 문서 작업의 예시로 들기위해서 지금 글을 작성중입니다. 구조화 작업을 위해서 지금 작성중중중중중. 스마 구조화 문서 작업의 예시로 들기위해서 지금 글을 작성중입니다. 구조화 작업을 위해서 지금 작성중중중중중. 첫째로 치한 방지, 둘째로 여성, 초등학생 및 미취학 아동, 신체 부자유자와 보호자의 안심 이용을 목적으로 여성 전용차량을 도입하였습니다. 자세한 사항은 「지하철 승차 시에 고려해야 할 점」 페이지를 참조하십시오. 여러분의 이해와 협조에 감사드립니다. 예를 들어 다음과 같은 글을 쓴다면 이렇게 ex)가 앞에 붙어서 나오는 놀라운 일이 벌어집니다. 구조화 기능은 예시를 계속 추가해 주어야 더욱 자세하게 작동합니다.'

      let url ="http://192.168.0.25:8088/showpaper/?part=" + (this.props.data.id).toString();
      //let url ="http://192.168.0.25:8088/showpaper/?part=MT1"
        axios.get(url).then((response) => {
          let text = response.data;
          $('#textpaper >p ').remove();
  				text = text.replace(/첫번째/gi, "<br><br>1.");
  				text = text.replace(/두번째/gi, "<br><br>2.");
  				text = text.replace(/세번째/gi, "<br><br>3.");
  				text = text.replace(/네번째/gi, "<br><br>4.");
          text = text.replace(/첫 번째/gi, "<br><br>1.");
          text = text.replace(/두 번째/gi, "<br><br>2.");
          text = text.replace(/세 번째/gi, "<br><br>3.");
          text = text.replace(/네 번째/gi, "<br><br>4.");
          text = text.replace(/첫째로/gi, "<br><br>1.");
          text = text.replace(/둘째로/gi, "<br><br>2.");
          text = text.replace(/첫번째로/gi, "<br><br>1.");
          text = text.replace(/두번째로/gi, "<br><br>2.");
  				text = text.replace(/예를 들어/gi, "<br><br>ex)");
          text = text.replace(/예를들어/gi, "<br><br>ex)");
          text = text.replace(/참고로/gi, "<br><br>cf)");
          text = text.replace(/하지만/gi, "<br><br>하지만,");
          text = text.replace(/마지막으로/gi, "<br><br>마지막으로,");
          text = text.replace(/결론적으로/gi, "<br><br>결론적으로,");
          text = text.replace(/중요한것은/gi, "<br><br>중요한것은,");
  				text = text.replace(/예로/gi, "<br><br>ex)");
  				$('#textpaper').append('<p>' + text + '</p>');
        }).catch((error) => {
            // FAILED
            ReactDOM.render(
                <div/>,
              document.getElementById('#textpaper'));
        });

	}

  renderKeywordPaper() {
      /*
        var data = [
        '기업','운영','기존','관리','방식','탈피','디지털','기술','가미','트랜스','트랜스포메이션','포메이션','기업규모','규모','모든','비즈니스','필요','물류','금융','의료','의료서비스','서비스','등등',
        '다양','산업','산업군','군','요구','수','고객','직원','우수','경험','제공','혁신적','프로세스','사용','속도','진화','오늘날','환경','솔루션','이것','세계적','기업간의','간의','경쟁','방법',
        '이','비용','향상','핵심','전환','최신','최신기술','수용','생각','조직','문화','변화','초점','사항','해결','신속','대응','마련','리더','충족','혁신','주도','지속적','개선','활동',
        '가속화','제품','출시','시간','단축','조직원','역량','마인드','긍정적','은','소비자','행동','시장','요인','요소','혼란','빅','빅데이터','데이터','클라우드','인공','인공지능','지능','적용','시스템',
        '때문','점차','가치','부여','노력','절감','결과','시작','기대','요구사항','무엇','파악','중요','편리','이유','발전','지에','대한','여부','성공적','아래','성숙도','1','측면','결과적',
        '브랜드','충성','높임','2','오리엔테이션','중심','의사','결정','촉진','성능','투명성','디지털화','화','3','새','모델','부응','세계','변혁','폭풍','조직운영','뿐','구조','전반','영향',
        '생산','창출','앞장'
      ];*/

        let url ="http://192.168.0.25:8088/keywordshow/?part=" + (this.props.data.id).toString();
        //let url ="http://192.168.0.25:8088/keywordshow/?part=MT1";
        axios.get(url).then((response) => {
          let data = response.data;
          $('#textpaper1 >p ').remove();
          var str='<p style="word-break: option;">';
          var j=1;
          for(var i=0;i<data.length;i++){

            if(i==data.length-1){
              str+=data[i]
            }else{
              str+=data[i]+", ";
            }

          }
          $('#textpaper1').append(str);
        }).catch((error) => {
            // FAILED
            ReactDOM.render(
                <div/>,
              document.getElementById('#textpaper1'));
        });

	}

  componentDidMount() {
    this.renderPieChart();
    this.renderKeywordTable();
    this.renderKeywordPaper();
    this.renderStructedPaper();
  }

  componentDidUpdate(prevProps, prevState){
    this.renderPieChart();
    this.renderKeywordTable();
    this.renderKeywordPaper();
    this.renderStructedPaper();
  }

  render(){
    return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h3>회의 기본 정보</h3>
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>{this.props.data.title}</h3>
              <hr/>
              <p><span className="label label-success">날짜</span> {'  '}{this.props.data.date}</p>
              <p><span className="label label-warning">시간</span> {'  '}{this.props.data.startTime}</p>
              <br/>
              <div className="panel panel-default">
                <div className="panel-heading">
    							<h4 className="panel-title">
    								코멘트
    							</h4>
    						</div>
                <div className="panel-body" style={{ overflowY: "auto", maxHeight: "250px"}}>
                    {this.props.data.comment}
                </div>
              </div>
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
                  <th>파트</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.userList.map((data, i) => {
                  return(
                    <tr key={i+1}>
                      <td scope="row">{i+1}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.partName}</td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-lg-12 col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
  							<h3 className="panel-title">
  								<i className="fa fa-bar-chart-o fa-fw"></i> 구조화 문서
  							</h3>
  						</div>
              <div className="panel-body" style={{ overflowY: "auto", maxHeight: "600px"}}>
                  <div id="textpaper"></div>
              </div>
            </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
  							<h3 className="panel-title">
  								<i className="fa fa-bar-chart-o fa-fw"></i> 구조화 흐름
  							</h3>
  						</div>
              <div className="panel-body" style={{ overflowY: "auto", maxHeight: "435px"}}>
                <div className="table-responsive">
                  <div id="textpaper1"></div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
							<h3 className="panel-title">
								<i className="fa fa-long-arrow-right fa-fw"></i>키워드 분석차트
							</h3>
						</div>
            <div className="panel-body" style={{overflowX: "auto"}}>
              <div id="pie">
                {this.renderPieChart()}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
							<h3 className="panel-title">
								<i className="fa fa-money fa-fw"></i>세부 키워드
							</h3>
						</div>
              <div className="table-responsive" style={{overflowY: "auto", height: "435px"}}>
                <table className="table table-bordered table-hover table-striped"
                  id="keywordtable">
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>키워드</th>
                      <th>키워드 수</th>

                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}



export default MeetingAnalysis;
