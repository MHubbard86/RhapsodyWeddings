import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = {        
    height: "70vh",
    width: "75%"
};
  
const defaultCenter = {
    lat: 51.5074, lng: -0.1
};

export default function MapContainer () {
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAJs-dMkyj_kTyATG3RlpI5yG_kQp_Aij8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
        />
     </LoadScript>
  );
}