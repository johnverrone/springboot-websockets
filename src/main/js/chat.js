import React from 'react';
import WelcomeView from './welcome-view';
import MainView from './main-view';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null
        };
        this._onName = this._onName.bind(this);
    }

    render() {
        return (
            <div>
                <WelcomeView username={this.state.username} _onName={this._onName} />
                <MainView username={this.state.username} />
            </div>
        )
    }

    _onName(e) {
        if (e.nativeEvent.keyCode != 13) return;
        var username = e.target.value;
        console.log(username);
        this.setState({username: username});
    }
}