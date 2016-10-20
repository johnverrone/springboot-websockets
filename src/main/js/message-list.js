import React from 'react';

export default class MessageList extends React.Component {

    render() {

        let list = this.props.messages.map(message => {
            return (
                <li>
                    <p>{message.text}</p>
                </li>
            )
        });

        return (
            <ul>
                {list}
            </ul>
        );
    }
}