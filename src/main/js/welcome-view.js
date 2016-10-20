import React from 'react';

export default class WelcomeView extends React.Component {

    render() {
        let view;
        let username = this.props.username;

        if (username) {
            view = <h1>Welcome {username}</h1>
        } else {
            view = <input onKeyPress={this.props._onName} placeholder="Enter a username" />
        }

        return view;
    }

}