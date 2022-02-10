import React from 'react';

import { messageService } from '../services/Service';

class Message extends React.Component {

  closeMessage() {
    messageService.closeMessage();
  }

  render() {
    return (
      <div className="app-alert">
        <div className={`alert alert-${this.props.type} m-n`} role="alert">
          <button type="button" className="close" onClick={() => this.closeMessage()}>
            <i className="iconf iconf-delete" aria-hidden="true"></i>
          </button>
          {typeof(this.props.msg) === 'string' || this.props.msg.length === 1
            ? <span className="m-r-xl">{this.props.msg}</span>
            : <ul className="unstyled errors-list">
                {this.props.msg.map((msg, index) => <li className={`error-item ${index ? 'm-t-m' : ''}`} key={index}>{msg}</li>)}
              </ul>
          }
        </div>
      </div>
    );
  }
}

export default Message;
