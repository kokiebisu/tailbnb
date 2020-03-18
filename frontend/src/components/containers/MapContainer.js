import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrayURLKeys={{ key: 'AIzaSyCIOOh3HYHodLXVbCxW0tL_Nl-y_N-IzrY' }}
        defaultCenter={center}
        defaultZoom={zoom}>
        <Marker lat={11.0168} lng={76.9558} name='My Marker' color='blue' />
      </GoogleMapReact>
    </div>
  );
};
export default SimpleMap;
