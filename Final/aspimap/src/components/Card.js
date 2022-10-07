import React, {useContext} from "react";
import { Link } from "react-router-dom";
import slugContext from "../context/slugContext";

const Card = ({ name, img, slug }) => {
  const context = useContext(slugContext);
  
  return (
    <>
    <div className="bg-white rounded-lg border border-gray-200 shadow-md hover:scale-105 transition-all dark:bg-gray-800 dark:border-gray-700 ">
      <Link to={`/category/${slug}`}>
        <img className="rounded-lg h-full  object-cover hover:opacity-90 " src={img} alt="..." id={slug} onClick={()=>context.update(slug)}/>
      </Link> 
      
        <h5 className=" pb-2 -mt-10  text-2xl font-bold tracking-tight text-white dark:text-white ">
          {name}
        </h5>

    </div>
    </>
  );
};

export default Card;
