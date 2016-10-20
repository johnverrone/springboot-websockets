import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
const position = [34.63, -88.15];

export default class MapView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Map
                    style={{height: "100vh"}}
                    center={position}
                    zoom={3.28}>

                    <TileLayer
                        url="https://api.mapbox.com/styles/v1/johnverrone/ciuhn3snw001f2jmitvwm4406/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9obnZlcnJvbmUiLCJhIjoiY2lmOGsxbDY2MjA5N3N2bHpxcjVtZmZ2OSJ9.gphOQXqdvWHWEXNfQ8dZdA"
                        attribution="John Verrone" />
                </Map>
            </div>
        )
    }
}