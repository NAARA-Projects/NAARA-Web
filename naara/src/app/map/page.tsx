"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
<<<<<<< HEAD
require('dotenv').config({ path: '.env.local' })
=======
import { time } from "console";
>>>>>>> 16e32c36185da33a33a8fadb541912ec9eca6cb5

const Map: React.FC = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '606px',
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

  // Add a console log to ensure the API key is loaded


  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBQ9TA-apd_CuM-hSGWJ4PNDFQ8amJ2mF0'}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker 
        position={location1}
        icon= 'blue_MarkerB.png' />
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker 
        position={location2}
        icon= 'red_MarkerA.png' />
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker position={location3}
        icon= 'blue_MarkerA.png' />
        { /* Add other components like DirectionsRenderer here if needed */ }
        <Marker position={location4}
        icon= 'red_MarkerB.png' />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

/// export default function DashboardPage () {
  const [places, setPlaces] = useState<Place []>([
    { //Events
      name: "Event A",
      date: "13 July 2024",
    },
    { //Events
      name: "Event B",
      date: "09 June 2024",
    },
    { //Trash Found
      name: "Trash A",
      status: "Cleared",
    },
    { //Trash Found
      name: "Trash B",
      status: "Pending",
    }
  ])
}jomok