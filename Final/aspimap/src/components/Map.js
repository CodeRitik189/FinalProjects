import React, {useState, useContext} from "react";
import GoogleMapReact from "google-map-react";
import slugContext from "../context/slugContext";

export const Map = ({coordinates, setCoordinates, setBounds, weather}) => {
  
  const {catPlace, category, slug, updateCatPlace} = useContext(slugContext); 
  const [first, setFirst] = useState(true)
  return (
    <div className="bg-blue-400 h-[90vh] w-full ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{lat:28.7041, lng:77.1025}}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          if(first && catPlace!=="" )
          {
            const {lat, lng} = category[slug]?.filter((place)=>place.name=== catPlace)[0]
            setCoordinates({ lat: lat , lng: lng });
            setFirst(false);
            updateCatPlace("")
          }else
          {
            
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }
        }}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
