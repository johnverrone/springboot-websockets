import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './chat';
import MapView from './map-view';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Chat />
            <MapView />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react'));
