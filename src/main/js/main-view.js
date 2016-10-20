import React from 'react';

import MessageList from './message-list';

export default class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this._onMessage = this._onMessage.bind(this);
    }

    render() {

        if (!this.props.username) var style = {display:'none'};

        return (
            <div style={style}>

                <MessageList messages={this.state.messages} />

                <input placeholder="Type your message" onKeyPress={this._onMessage} />
            </div>
        );
    }

    _onMessage(e) {
        if (e.nativeEvent.keyCode != 13) return;

        let input = e.target;
        let text = input.value;

        let message = {
            username: this.props.username,
            text: text,
            time: new Date()
        };

        this.setState({messages: this.state.messages.concat([message])});

        input.value = '';
    }

}