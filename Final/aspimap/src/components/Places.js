import React, {useContext} from 'react';
import placesContext from '../context/placesContext';
import img from "../static/hotel.jpg"
export const Places = ({place}) => {
  const context = useContext(placesContext)
  const {addPlace} = context; 
  const handleSave = async(e) =>{
    e.preventDefault();
    addPlace(place.name, place.location_id, place.address, place.phone, place.website, place.price_level)
}
  return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-100 ">
  <img className="w-full" src={place.photo?place.photo.images.large.url:img} alt={place.name}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-purple-900">{place.name}</div>

    <div className="flex justify-between "> 
    <i className="fa-regular fa-money-bill-1"></i>
      <span className='text-purple-800'>{place.price_level}</span>
    </div>
    
    <div className="flex justify-between "> 
    <i className="fa-solid fa-ranking-star"></i>
      <span className='text-purple-800'>{place.ranking}</span>
    </div>
    
    {place?.awards?.map((award)=>{
        return(<div className="flex justify-between my-1"> 
      <i className="fa-solid fa-award"></i>
      <span className="text-sm text-purple-600">{award.display_name}</span>
    </div>);
    })}
    
    <div className="px-6 pt-4 pb-2">
    {place?.cuisine?.map(({name})=>{
      return(
      
      <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2 ">{name}</span>
    );
    })}
    </div>

    {place.address && (<div className="flex justify-between "> 
      <i className="fa-solid fa-location-dot"></i>
      <span className='text-purple-800'>{place.address}</span>
    </div>)}
    
    {place.phone && (<div className="flex justify-between "> 
    <i className="fa-solid fa-phone"></i>
      <span className='text-purple-800'>{place.phone}</span>
    </div>)}
    <button type="button" className="mx-2 my-2 px-3 py-2 text-sm  text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full  text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=> window.open(place.web_url,'_blank')}>Trip Advisor</button>
    
    <button type="button" className="mx-2 my-2 px-3 py-2 text-sm  text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full  text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=> window.open(place.website,'_blank')}>Website</button>
    
    <button type="button" className="mx-2 my-2 px-3 py-2 text-sm text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full  text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={handleSave}>Save Place</button>
  </div>
  
</div>;
} 

export default Places;