"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { time } from "console";

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
  let map, popup, Popup;

/** Initializes the map and the custom popup. */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.9, lng: 151.1 },
    zoom: 10,
  });
  /**
   * A customized popup on the map.
   */
  class Popup extends google.maps.OverlayView {
    position;
    containerDiv;
    constructor(position: any, content: any) {
      super();
      this.position = position;
      content.classList.add("popup-bubble");

      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");

      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(content);
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes()!.floatPane.appendChild(this.containerDiv);
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position,
      );
      // Hide the popup when it is far out of view.
      const display =
        Math.abs(divPosition!.x) < 4000 && Math.abs(divPosition!.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition!.x + "px";
        this.containerDiv.style.top = divPosition!.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }

  popup = new Popup(
    new google.maps.LatLng(-33.866, 151.196),
    document.getElementById("content"),
  );
  popup.setMap(map);
}

window.initMap = initMap;

};

export default Map;

