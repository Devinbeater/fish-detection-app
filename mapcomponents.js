import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent({ fishData }) {
  const defaultPosition = [51.505, -0.09]; // Default coordinates for the map
  const { location } = fishData || {};

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer center={location || defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {location && (
          <Marker position={location}>
            <Popup>Fish detected here!</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
