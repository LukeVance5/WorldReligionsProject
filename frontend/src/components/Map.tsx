import { MapContainer, TileLayer, GeoJSON, Marker, Popup} from 'react-leaflet';
import type { MapContainerProps } from 'react-leaflet';
import L, {  type LatLngTuple} from 'leaflet';
import { useState } from 'react';

const position: LatLngTuple = [39.8283, -98.5795]
function Map() {
  return <> <MapContainer center={position} zoom={13}>
     <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer></>
} 
export default Map