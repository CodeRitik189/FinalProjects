import React, { useState, useContext } from "react";
import alertContext from "./alertContext";
import placesContext from "./placesContext"
const PlacesState = (props)=>{

    const [places, setPlaces] = useState([]);
    const context = useContext(alertContext);
    const {showAlert} = context;
    const addPlace = async(name, location_id, address, phone, website, price_level) =>{
      const response = await fetch("http://localhost:5000/api/places/addplace",
        {method:"POST",
          headers: {
            "Content-Type":"application/json",
            "auth-token": localStorage.getItem('token')
          },
          body:JSON.stringify({name:name,
          location:location_id,
          address:address,
          phone:phone,
          website:website,
          price:price_level})
        }
      );
      const json = await response.json();
      if(json.success)
      {
        showAlert("purple","place saved successfully!!")
      }
      else{
        showAlert("purple","Some error occured")
      }
    }
    const getPlaces = async() =>{
      const response = await fetch("http://localhost:5000/api/places/fetchplaces",
      {method:"GET",
      headers: {
        "Content-Type":"application/json",
        "auth-token": localStorage.getItem('token')
      },
    }
    );
    const json = await response.json();
    setPlaces(json)
  }

  const deletePlace = async(id)=>{
    const newPlaces = places.filter((place)=>{return place._id !== id})
    setPlaces(newPlaces)
    const response = await fetch(`http://localhost:5000/api/places/deleteplace/${id}`,
      {method:"DELETE",
      headers: {
        "Content-Type":"application/json",
        "auth-token": localStorage.getItem('token')
      },
    }
    );
    const json = await response.json();
    if(json.success)
      {
        showAlert("orange","place deleted successfully!!")
      }
      else{
        showAlert("purple","Some error occured")
      }

  }
    return (<placesContext.Provider value={{places, addPlace, getPlaces, deletePlace}}>
        {props.children}
    </placesContext.Provider>)
}

export default PlacesState;
