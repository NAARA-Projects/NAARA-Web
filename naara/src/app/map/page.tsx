"use client";
import React, { useState, useCallback} from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { time } from "console";

const Map: React.FC = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: -8.495647, // Initial center latitude
    lng: 115.090852, // Initial center longitude
  };

  const location1 = {
    lat: -8.805447,
    lng: 115.233766,
  }

  const location2 = {
    lat: -8.604434,
    lng: 115.326080,
  }

  const location3 = {
    lat: -8.665914,
    lng: 115.138362,
  }

  const location4 = {
    lat: -8.690725,
    lng: 115.429313,
  }

  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);

  const onMarkerClick = useCallback((position: { lat: number; lng: number }) => {
    setSelected(position);
  }, []);

  // Add a console log to ensure the API key is loaded


  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBQ9TA-apd_CuM-hSGWJ4PNDFQ8amJ2mF0'}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker 
          position={location1}
          icon= 'blue_MarkerB.png'
          onClick={() => onMarkerClick(location1)} 
        />
        {selected && (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2><b>Nusa Dua Beach</b></h2>
              <p>Event Details: 13 July 2024 - 10.00</p>
            </div>
          </InfoWindow>
        )}
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker 
          position={location2}
          icon= 'red_MarkerA.png' 
          onClick={() => onMarkerClick(location2)} 
        />
        {selected && (
          <InfoWindow
            position={location2}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2><b>Segara Wilis Beach</b></h2>
              <p>Trash Found! Host your clean-up event here!</p>
            </div>
          </InfoWindow>
        )}
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker position={location3}
          icon= 'blue_MarkerA.png' 
          onClick={() => onMarkerClick(location3)} 
        />
        {selected && (
          <InfoWindow
            position={location3}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2><b>Berawa Beach</b></h2>
              <p>Event Details: 05 August 2024 - 15.00</p>
            </div>
          </InfoWindow>
        )}
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker position={location4}
          icon= 'red_MarkerB.png' 
          onClick={() => onMarkerClick(location4)} 
        />
        {selected && (
          <InfoWindow
            position={location4}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2><b>Sandy Bay Beach</b></h2>
              <p>Trash Found! Host your clean-up event here!</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    
  );
};

export default Map;