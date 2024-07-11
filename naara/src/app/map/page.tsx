"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map: React.FC = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '606px',
  };

  const center = {
    lat: -6.257390, // Initial center latitude
    lng: 106.618397, // Initial center longitude
  };

  const location2 = {
    lat: -6.325732,
    lng: 106.990896,
  }

  const location3 = {
    lat: -6.014647,
    lng: 106.676844,
  }

  // Add a console log to ensure the API key is loaded
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBQ9TA-apd_CuM-hSGWJ4PNDFQ8amJ2mF0'}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        <Marker position={center} />
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker position={location2} />
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker position={location3} />
        { /* Add other components like DirectionsRenderer here if needed */ }
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;