import React, {useEffect, useState} from "react";
import {getPlaces, getWeather} from "../api";
import List from "./List";
import Map from "./Map";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("token"))
    {

    }
    else
    {navigate("/login")}
  
    
  }, [])
    const [places, setPlaces] = useState([])
    const [weather, setWeather] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({lat:28.7041, lng:77.1025})
    const [bounds, setBounds] = useState({})
    const [isLoding, setIsLoding] = useState(false)
    const [type, setType] = useState("restaurants")
    const [rating, setRating] = useState(5)
    
    // useEffect(() => {
    //   navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) =>
    //   {
    //       setCoordinates({lat:latitude, lng:longitude})
    //   }
    //   )
    // }, [])
    
    useEffect(() => {
      const filteredPlaces = places?.filter((place)=>place.rating>  rating)
      setFilteredPlaces(filteredPlaces); 
    }, [rating])
   

    useEffect(() => {
      setIsLoding(true)
      // getWeather(coordinates.lat, coordinates.lng).then((data)=>{
      //   setWeather(data)
      // })

      // ye uncomment krna hai taki api chal ske
      getPlaces(type, bounds.sw, bounds.ne).then((data) =>{
          setPlaces(data?.filter((place)=> place.name && place.num_reviews >0))
          setFilteredPlaces([])
          setIsLoding(false)
      })
      
    }, [type, coordinates, bounds])
    
  return (
    <div>
      <div className="grid grid-cols-12 pt-2 gap-4 px-1">
        <div className="col-span-4 ">
          <List places = {filteredPlaces?.length ? filteredPlaces: places} isLoding={isLoding} type={type} setType={setType} rating={rating} setRating={setRating} />
        </div>
        <div className="col-span-8 border border-black ">
          <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default Home;