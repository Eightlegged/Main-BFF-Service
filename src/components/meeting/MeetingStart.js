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


      console.log('page created');
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      console.log("바뀐거 확인222");
    }

    handleChange(event) {

        this.setState({value: event.target.value});

    }

    handleSubmit() {
      console.log('stop');
      let data = this.props.transcript;
      console.log(data);
      this.props.stopListening();

      let id = this.props.data.id;
      let partName = this.props.data.partName;


      this.props.onMeetingSave(id, data, partName).then(
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
                  <div className="col-lg-12">
                    <h3>회의 기본 정보</h3>
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <h3>{this.props.data.title}</h3>
                        <br/>
                        <p><span className="label label-success">날짜</span> {'  '}{this.props.data.date}</p>
                        <p><span className="label label-warning">시간</span> {'  '}{this.props.data.startTime}</p>
                        <br/>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <i className="fa fa-commenting-o fa-fw"></i>코멘트
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
                <div className="row" >
                  <div className="col-lg-12">
                    <h3>회의 시작</h3>

                  </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h3 className="panel-title">
                            <i className="fa fa-microphone fa-fw"></i>음성 인식
                          </h3>
                        </div>
                        <Input type="textarea" name="text" id="result_text" style={{resize: "none", height: 400, overflowY: "auto"}}
                                   value={this.props.transcript} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          <i className="fa fa-check-square-o fa-fw"></i>회의 체크리스트
                        </h3>
                      </div>
                      <ul className="list-group" style={{ height: 500, overflowY: "auto"}}>
                      
                        <li className="list-group-item">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" checked disabled />
                              Option one is this and that&mdash;be sure to include why its great
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" checked disabled />
                              Option one is this and that&mdash;be sure to include why its great
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" checked disabled />
                              Option one is this and that&mdash;be sure to include why its great
                            </label>
                          </div>
                        </li>
                      </ul>
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
