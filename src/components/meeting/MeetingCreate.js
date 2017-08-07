import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import plus from '../../img/plus.png';
import minus from '../../img/minus.png';

class MeetingCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div style={{textAlign: 'right'}}>
          <button onClick={this.toggle}><img src={plus} /></button>
          <button onClick={this.toggle}><img src={minus}/></button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>새 회의 만들기</ModalHeader>
          <ModalBody>
            세부사항 설정
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>만들기</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>취소</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MeetingCreate;
