import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import Carousel from './Carousel'
import sight from "../static/sight.jpg"
import hills from "../static/hills.jpg"
import urban from "../static/urban.jpg"
import adventure from "../static/adventure.jpg"
import beach from "../static/beach.jpg"
import family from "../static/family.jpg"
import art from "../static/art.jpg"
import history from "../static/history.jpg"
import budget from "../static/budget.jpg"
export const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("token"))
    {

    }
    else
    {navigate("/login")}
  
    
  }, [])
  return (
    
      <>
        <Carousel/>
          <p className="font-normal dark:text-white  text-4xl py-2 text-purple-900 text-center">Search for Indian cities to visit by catagory</p> 
        <div className="my-4 w-4/5 ml-32 grid grid-rows-3 grid-flow-col gap-4">
          <Card name="Sight seeing" img={sight} slug="sight" /> 
          <Card name="Hills" img={hills} slug="hills" /> 
          <Card name="Urban culture" img={urban} slug="urban" /> 
          <Card name="Adventure" img={adventure} slug="adventure" /> 
          <Card name="Beaches" img={beach} slug="beach" /> 
          <Card name="Family/ Religious" img={family} slug="family" /> 
          <Card name="Art and Culture" img={art} slug="art" /> 
          <Card name="Budget friendly" img={budget} slug="budget" /> 
          <Card name="Traditional and history" img={history} slug="history" /> 
          

        </div>
      </>
    
  )
}
