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

    render() {
        const { transcript, 
                interimTranscript,
                resetTranscript,
                browserSupportsSpeechRecognition,
                listening,
                recognition,
                startListening,
                stopListening } = this.props
        
        
        recognition.lang = 'ko-KR'

        if (!browserSupportsSpeechRecognition) {
            return null
        }

        return (
        <div>
            <Row style={{alignItems: "center"}}>
                <Col />
                <Col>
                <ButtonGroup>
                    <Button onClick={startListening}>시작</Button>
                    <Button onClick={stopListening}>종료</Button>
                    <Button onClick={resetTranscript}>리셋</Button>
                </ButtonGroup>
                </Col>
                <Col />
            </Row>
            
            <Row>

                <Col>
                <Form>
                    <FormGroup>
                    <Label for="SttText">인식 결과</Label>
                    <Input type="textarea" name="text" id="result_text" style={{ height: 150}}>
                        {transcript}
                    </Input>
                    </FormGroup>
                </Form>
                </Col>
 
            </Row>
        </div>
        )
    }
}

SttTest.propTypes = propTypes

export default SpeechRecognition(options)(SttTest)
