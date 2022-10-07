import React, { useContext } from "react";
import { Link } from "react-router-dom";
import slugContext from "../context/slugContext";
const Category = () => {
  const context = useContext(slugContext);
  const { slug, category, updateCatPlace } = context;
  return (
    <>
      <p className="text-6xl text-purple-800 text-center">{slug} </p>

      {category[slug]?.map((place) => (
        <div
          className=" m-4 flex flex-col w-5/6 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" 
          key={place.name}
        >
          <img
            className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={place.img}
            alt="" 
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <Link to="/map" className="mb- text-purple-700 text-2xl font-bold tracking-tight dark:text-white"
            onClick={()=>updateCatPlace(place.name)} >
              {place.name}
              
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {place.tag}
            </p>
          </div>
          
        </div>
      ))}
    </>
  );
};

export default Category;
