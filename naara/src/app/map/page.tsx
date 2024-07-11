"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map: React.FC = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 0, // Initial center latitude
    lng: 0, // Initial center longitude
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker position={center} />
        { /* Add other components like DirectionsRenderer here if needed */ }
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

