import React, { useContext, useEffect} from "react";
import placesContext from "../context/placesContext";
const Saved = () => {
  const context = useContext(placesContext);
  const { places, getPlaces, deletePlace } = context;

  useEffect(() => {
    getPlaces();
    
  }, [])
  

  return (
    <>
      <h2 className="font-semibold text-purple-800 text-4xl m-4 dark:text-white">
        Your saved places
      </h2>

      <div className="grid grid-cols-3 gap-4 min-h-screen">
        {places.map((place) => {
          return <div className=" col p-6 max-w-sm bg-white rounded-lg border border-purple-200 shadow-md dark:bg-purple-800 dark:border-purple-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900 dark:text-white">{place.name}</h5>
          {place.address && (<div className="flex justify-between my-2 "> 
      <i className="fa-solid fa-location-dot"></i>
      <span className='text-purple-800'>{place.address}</span>
    </div>)}
    
    {place.phone && (<div className="flex justify-between my-2 "> 
    <i className="fa-solid fa-phone"></i>
      <span className='text-purple-800'>{place.phone}</span>
    </div>)}
    <div className="flex justify-between my-2 "> 
    <i className="fa-regular fa-money-bill-1"></i>
      <span className='text-purple-800'>{place.price?place.price:"--"}</span>
    </div>
          
          <a href={place.website} target="_blank" rel="noreferrer" className="inline-flex items-center py-2 px-3 mx-1 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
          Visit Website
          </a>
          <button  className="inline-flex items-center mx-1 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          onClick={()=>{deletePlace(place._id)}}>
          Delete Place
          </button>
          </div>
          ;
        })}
      </div>
    </>
  );
};

export default Saved;
