import React, {useContext} from "react";
import Spinner from "./Spinner"
import Places from "./Places";
import slugContext from "../context/slugContext";
export const List = (props) => {
  
  const {catPlace}  = useContext(slugContext)
  return (

    <div className="bg-grey-200 h-[90vh] overflow-scroll">
      
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
          Hotels, Restraunts & attractions near around {catPlace}
        </h3>
        {props.isLoading? (<Spinner/>) :(<>
         <div className="relative inline-flex">
          
          <select
            className="border mx-2 border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={props.type}
            onChange={(e) => props.setType(e.target.value)}
          >
            <option
              className="border-0 bg-transparent border-b-2"
              value="restaurants"
            >
              Restaurants
            </option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>

        
        <div className="relative inline-flex">
          
          <select
            className="border mx-2 border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={props.rating}
            onChange={(e) => props.setRating(e.target.value)}
          >
            <option value={5}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={5}>Above 4.5</option>
          </select>
        </div>
      
      <div className="container my-3">
        {props.places?.map((place, i) => (
          <div className="list-item m-3" key={i}>
            <Places place={place} key={place.location_id}/>
          </div>
        ))}
      </div>
      </>)}
    </div>
  );
};
export default List;
