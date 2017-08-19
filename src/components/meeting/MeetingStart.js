import React, { PropTypes ,Component } from 'react';
import {ButtonGroup,Button,Form,FormGroup,Label,Input,Col,Row} from 'reactstrap';
import SpeechRecognition from 'react-speech-recognition';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  interimTranscript : PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  finalTranscript: PropTypes.string,
  listening : PropTypes.bool,
  recognition : PropTypes.object,
  startListening : PropTypes.func,
  stopListening : PropTypes.func,
  // Props from parent component
  data: PropTypes.object,
  onMeetingSave: PropTypes.func
}

const options = {
    autoStart: false
}

class MeetingStart extends Component{
    constructor(props){
      super(props);

      this.state = {
        checkList: this.props.data.checkList
      }

      console.log('page created');
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      console.log("바뀐거 확인222");
    }

    handleChange(e) {
      console
      let checkList = this.state.checkList;
      checkList[e.target.name].checked = !checkList[e.target.name].checked;
      this.setState({
        checkList: checkList
      });
      console.log(checkList);
    }

    handleSubmit() {
      console.log('stop');
      let data = this.props.transcript;
      console.log(data);
      this.props.stopListening();

      let id = this.props.data.id;
      let partName = this.props.data.partName;
      let checkList = this.state.checkList;

      this.props.onMeetingSave(id, data, partName, checkList).then(
          (success) => {
              if(!success) {
                  alert('회의 생성 실패');
              }
              else{
                this.props.history.push('/');
              }
          }
      );

    }

    componentWillUnmount(){
      console.log('Unmount');
      this.props.stopListening();
    }

    render() {
        const { transcript,
                interimTranscript,
                resetTranscript,
                browserSupportsSpeechRecognition,
                finalTranscript,
                listening,
                recognition,
                startListening,
                stopListening,
                data,
                onMeetingSave } = this.props


        if (!browserSupportsSpeechRecognition) {
            alert('크롬을 사용해 주세요')
            return null
        }


        recognition.lang = 'ko-KR'
        return (
          <div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          <i className="fa fa-drivers-license-o fa-fw"></i> 기본 정보
                        </h3>
                      </div>
                      <div className="panel-body" style={{overflowY: "auto", maxHeight: "435px"}}>
                        <h3>{this.props.data.title}</h3>
                        <hr/>
                        <p><span className="label label-primary">파트</span> {'  '}{this.props.data.partName}</p>
                        <p><span className="label label-success">날짜</span> {'  '}{this.props.data.date}</p>
                        <p><span className="label label-warning">시간</span> {'  '}{this.props.data.startTime}</p>
                        <p><span className="label label-info">목적</span> {'  '}{this.props.data.content}</p>
                        <p><span className="label label-danger">개요</span> {'  '}</p>
                        <div className="panel panel-default">
                          <div className="panel-body" style={{ overflowY: "auto", maxHeight: "250px"}}>
                              {this.props.data.comment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          <i className="fa fa-users fa-fw"></i> 참석 명단
                        </h3>
                      </div>
                      <div className="table-responsive" style={{overflowY: "auto", maxHeight: "435px"}}>
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
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h3 className="panel-title">
                            <i className="fa fa-check-square-o fa-fw"></i> 체크리스트
                          </h3>
                        </div>
                        <ul className="list-group" style={{ height: 400, overflowY: "auto"}}>
                          {this.props.data.checkList.map((data, i) => {
                            return(
                            <li className="list-group-item">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" name={i} onChange={this.handleChange} />
                                  {' '}{data.item}
                                </label>
                              </div>
                            </li>);
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h3 className="panel-title">
                            <i className="fa fa-microphone fa-fw"></i>음성 인식
                          </h3>
                        </div>
                        <Input type="textarea" name="text" id="result_text" style={{resize: "none", height: 400, overflowY: "auto"}}
                                   value={this.props.transcript} />
                      </div>
                    </div>
                </div>

                <div className="row">
                  <div style={{textAlign: "center"}}>
                    <Button color="success" size="lg" onClick={this.props.startListening}>시작</Button>{' '}
                    <Button color="warning" size="lg" onClick={this.handleSubmit}>종료</Button>
                  </div>
                </div>

          </div>
        )
    }
}

MeetingStart.propTypes = propTypes

export default SpeechRecognition(options)(withRouter(MeetingStart))
