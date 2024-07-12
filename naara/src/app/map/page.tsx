"use client";
import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Map: React.FC = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: -8.495647, // Initial center latitude
    lng: 115.090852, // Initial center longitude
  };

  const locations = [
    { id: 1, lat: -8.805447, lng: 115.233766, title: "Nusa Dua Beach", details: "Event Details: 13 July 2024 - 10.00", icon: 'blue_MarkerB.png' },
    { id: 2, lat: -8.604434, lng: 115.326080, title: "Segara Wilis Beach", details: "Trash Found! Host your clean-up event here!", icon: 'red_MarkerA.png' },
    { id: 3, lat: -8.665914, lng: 115.138362, title: "Berawa Beach", details: "Event Details: 05 August 2024 - 15.00", icon: 'blue_MarkerA.png' },
    { id: 4, lat: -8.690725, lng: 115.429313, title: "Sandy Bay Beach", details: "Trash Found! Host your clean-up event here!", icon: 'red_MarkerB.png' }
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const onMarkerClick = useCallback((id: number) => {
    setSelected(id);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBQ9TA-apd_CuM-hSGWJ4PNDFQ8amJ2mF0'}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {locations.map(location => (
          <React.Fragment key={location.id}>
            <Marker
              position={{ lat: location.lat, lng: location.lng }}
              icon={location.icon}
              onClick={() => onMarkerClick(location.id)}
            />
            {selected === location.id && (
              <InfoWindow
                position={{ lat: location.lat, lng: location.lng }}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h2><b>{location.title}</b></h2>
                  <p>{location.details}</p>
                </div>
              </InfoWindow>
            )}
          </React.Fragment>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;