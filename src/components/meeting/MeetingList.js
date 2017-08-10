import React, { Component } from 'react';
//
import { Table } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


class MeetingList extends Component {
  constructor(props) {
    super(props);
    console.log(document.getElementById("PageContainer").style);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'done'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div style={{height: "90%"}}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'done' })}
              onClick={() => { this.toggle('done'); }}
            >
              종료된 회의
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{height: "90%", overflow: "auto"}}>
          <TabPane tabId="done">
            <div >
              <Table bordered>
                <thead>
                </thead>
                <tbody>
                  {this.props.doneMeetings.map((data, i) => {
                    return (
                      <tr style={{textAlign : 'left'}} key={i}>
                        <td><div>{data.date}</div><div>{data.name}</div></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default MeetingList;
