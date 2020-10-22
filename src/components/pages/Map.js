import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  // const mapStyles = {
  //   height: "400px",
  //   width: "95vw",
  // };

  // const defaultCenter = {
  //   lat: 56.036201,
  //   lng: 12.61349,
  // };

  // const position = {
  //   lat: 56.038738,
  //   lng: 12.614597,
  // };

  return (



<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.8317145327214!2d12.612145816275588!3d56.03890258063086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46523111c2b59f7f%3A0xb0d680e7675f565c!2sNy%20Kronborgvej%202%2C%203000%20Helsing%C3%B8r!5e0!3m2!1sen!2sdk!4v1603138000000!5m2!1sen!2sdk" width="100%" height="450"  ></iframe></div>
                


    // <div className="map">
    //   <LoadScript googleMapsApiKey="AIzaSyBJ_AVFZbxWP5k1K_ib-WDJyyvp4_3L4PU">
    //     <GoogleMap
    //       mapContainerStyle={mapStyles}
    //       zoom={13}
    //       center={defaultCenter}
    //     >
    //       {<Marker position={position} />}
    //     </GoogleMap>
    //   </LoadScript>
    // </div>
  );
}

export default Map;
