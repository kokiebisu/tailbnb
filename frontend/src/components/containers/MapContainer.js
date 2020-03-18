import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = (props) => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCIOOh3HYHodLXVbCxW0tL_Nl-y_N-IzrY' }}
        defaultCenter={center}
        defaultZoom={zoom}>
        <Marker {...props} />
      </GoogleMapReact>
    </div>
  );
};
export default Map;
