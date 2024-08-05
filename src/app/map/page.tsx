"use client";
import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { CustomButton } from "../components";
import Image from "next/image";
import { RecentlyAdded } from "../components";
import { RelevantToYou } from "../components";

const Map: React.FC = () => {
  const mapButtonClick = () => {
  }
  const mapContainerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: -8.495647, 
    lng: 115.090852, 
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
    <>
      <div className="fixed w-full h-[100vh]">
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
                      <p className='font-segoe font-thin text-black text-m text-center'>
                      <h2><b>{location.title}</b></h2>
                      <p>{location.details}</p>
                      <div className="container flex text-white py-[8px] px-16 flex-row items-center align-center justify-center">
                        <CustomButton title={"+ Join/Host"} handleClick={mapButtonClick} containerStyles="mx-2 bg-gradient-to-r from-[#5ABBDC] to-[#2457B5] rounded-lg px-3 py-[2px]"/>
                      </div>
                    </p>
                    </div>
                  </InfoWindow>
                )}
              </React.Fragment>
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <main className="w-full flex items-center justify-center">
        <div className="absolute w-[90vw] h-[2000px] bg-[#202020E6] top-[75vh] rounded-t-3xl p-1 backdrop-blur-xl">
          <div className="flex-col flex items-center justify-center">
            <Image src={"/drag.png"} alt={""} width={133} height={6} className="mt-2"/>
          <div className="flex-col flex items-center justify-center"></div>
            <div className="flex-row flex items-center justify-center">
              <div className="flex-col flex items-start justify-center">
                <p className="text-white font-lexend font-semibold text-[24px] mb-2">Recently added</p>
                <div className="flex-row flex items-center justify-center">
                  <div className="flex-col flex items-center justify-center">
                    <RecentlyAdded number="1." orgName="The Ocean Cleanup" eventName="PUBLISHED: “Big problems require big sol..." image={"/orgicon.png"}/>
                    <RecentlyAdded number="2." orgName="Ocean Conservancy" eventName="PUBLISHED: “Preventing marine pollui" image={"/orgicon1.png"}/>
                  </div>
                  <div className="flex-col flex items-center justify-center">
                    <RecentlyAdded number="3." orgName="The Ocean Cleanup" eventName="PUBLISHED: “Big problems require big sol..." image={"/orgicon.png"}/>
                    <RecentlyAdded number="4." orgName="The Ocean Cleanup" eventName="PUBLISHED: “Big problems require big sol..." image={"/orgicon.png"}/>
                  </div>
                  <div className="flex-col flex items-center justify-center">
                    <RecentlyAdded number="5." orgName="The Ocean Cleanup" eventName="PUBLISHED: “Big problems require big sol..." image={"/orgicon.png"}/>
                    <RecentlyAdded number="6." orgName="The Ocean Cleanup" eventName="PUBLISHED: “Big problems require big sol..." image={"/orgicon.png"}/>
                  </div>
                </div>
              </div>
              <Image src={"/separatordrag.png"} alt={"separator"} width={2} height={165} className="mx-4 mt-10"/>
              <div className="flex-col flex items-start justify-center">
                <p className="text-white font-lexend font-semibold text-[24px] mb-2">Relevant to you</p>
                <RelevantToYou eventName='Marunda Beach' eventDesc='In its time, Marunda Beach was one of the most popular tourism destinations in Indonesia. Located in Cilincing, Jakarta, the beach was blessed with clear blue water and free of plastic or cloth waste.' image={'/orgicon67.png'} userIcon={'/usericon.png'} userName='Stnorocwzo'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Map;
