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
                        <p>주제: {this.props.data.title}</p>
                        <p>날짜: {this.props.data.date}</p>
                        <p>시간: {this.props.data.startTime}</p>
                        <p>코멘트</p>
                        <p>{this.props.data.comment}</p>
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
                    <div className="col-lg-12">
                      <Form>
                          <FormGroup>
                          <Label>인식 결과</Label>
                          <Input type="textarea" name="text" id="result_text" style={{resize: "none", height: 150}}
                                 value={this.props.transcript} onChange={this.handleChange} />
                          </FormGroup>
                      </Form>
                      <div style={{textAlign: "center"}}>
                        <Button color="success" onClick={this.props.startListening}>시작</Button>{' '}
                        <Button color="warning" onClick={this.handleSubmit}>종료</Button>
                      </div>
                    </div>
                </div>
          </div>
        )
    }
}

MeetingStart.propTypes = propTypes

export default SpeechRecognition(options)(withRouter(MeetingStart))
