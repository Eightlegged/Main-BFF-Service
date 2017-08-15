import React, { PropTypes ,Component } from 'react';
import {ButtonGroup,Button,Form,FormGroup,Label,Input,Col,Row} from 'reactstrap';
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  interimTranscript : PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  listening : PropTypes.bool,
  recognition : PropTypes.object,
  startListening : PropTypes.func,
  stopListening : PropTypes.func
}

const options = {
    autoStart: false
}

class SttTest extends Component{
    constructor(props){
      super(props);

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const { transcript,
                interimTranscript,
                resetTranscript,
                browserSupportsSpeechRecognition,
                listening,
                recognition,
                startListening,
                stopListening } = this.props


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
                                 value={transcript} onChange={this.handleChange} />
                          </FormGroup>
                      </Form>
                      <div style={{textAlign: "center"}}>
                        <Button color="success" onClick={startListening}>시작</Button>{' '}
                        <Button color="warning" onClick={stopListening}>종료</Button>
                      </div>
                    </div>
                </div>
          </div>
        )
    }
}

SttTest.propTypes = propTypes

export default SpeechRecognition(options)(SttTest)
