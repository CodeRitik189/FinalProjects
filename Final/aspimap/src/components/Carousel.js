import React from 'react'
import travel from "../static/travel.jpg"
import hotel from "../static/hotel.jpg"
import map from "../static/map.jpg"
import food from "../static/food.jpg"
import attractions from "../static/attractions.jpg"

const Carousel = () => {
  return (
    
<div id="indicators-carousel" className="relative" data-carousel="static">

<div className="overflow-hidden relative h-48  sm:h-64 xl:h-80 2xl:h-96">

<div className="duration-700 flex ease-in-out absolute  inset-0 transition-all transform translate-x-0 " data-carousel-item="active">
<img src={travel} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
<div className="carousel-caption hidden md:block absolute text-center bottom-0 left-1/2 -ml-20 text-white font-bold mb-3">
        <h5 className="text-2xl bg-black bg-opacity-40">Travel Advisor</h5>
        <p className="text-xl bg-black bg-opacity-40" >Plan your travel easily.</p>
      </div>
</div>
<div className="duration-700 flex ease-in-out absolute  inset-0 transition-all transform translate-x-0 " data-carousel-item="active">
<img src={hotel} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
<div className="carousel-caption hidden md:block absolute text-center bottom-0 left-1/2 -ml-20 text-white font-bold  mb-3 ">
        <h5 className="text-2xl bg-black bg-opacity-40">Plan your relaxing stay</h5>
        <p className="text-xl bg-black bg-opacity-40">Search for popular Hotels</p>
      </div>
</div>
<div className="duration-700 flex ease-in-out absolute  inset-0 transition-all transform translate-x-0 " data-carousel-item="active">
<img src={food} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
<div className="carousel-caption hidden md:block absolute text-center bottom-0 left-1/2 -ml-28 text-white font-bold  mb-3 ">
        <h5 className="text-2xl bg-black bg-opacity-40">Plan your meal</h5>
        <p className="text-xl bg-black bg-opacity-40">Find restaurants for delicious food nearby</p>
      </div>
</div>
<div className="duration-700 flex ease-in-out absolute  inset-0 transition-all transform translate-x-0 " data-carousel-item="active">
<img src={attractions} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
<div className="carousel-caption hidden md:block absolute text-center bottom-0 left-1/2 -ml-28 text-white font-bold  mb-3 ">
        <h5 className="text-2xl bg-black bg-opacity-40">Plan your activity</h5>
        <p className="text-xl bg-black bg-opacity-40">Find out attractions and places to visit.</p>
      </div>
</div>

<div className="duration-700 flex ease-in-out absolute  inset-0 transition-all transform translate-x-0 " data-carousel-item="active">
<img src={map} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
<div className="carousel-caption hidden md:block absolute text-center bottom-0 left-1/2 -ml-32 text-white font-bold  mb-3 ">
        <h5 className="text-2xl bg-black bg-opacity-40">Plan using your location</h5>
        <p className="text-xl bg-black bg-opacity-40">Manipulate map to find places nearby.  </p>
      </div>
</div>

</div>



<button type="button" className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
<span className="hidden">Previous</span>
</span>
</button>
<button type="button" className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
<span className="hidden">Next</span>
</span>
</button>
</div>

  )
}

export default Carousel;