import React from "react";
import { Routes, Route, useParams  } from "react-router-dom";
import s_flashmo_022_park_34 from "./images/s_flashmo_022_park_34.jpg";
import s_flashmo_022_park_20 from "./images/s_flashmo_022_park_20.jpg";
import PortfolioContent from './PortfolioContent'
const Portfolio = () => {
  const { id }  = useParams()

  const showContent = () => {
    console.log(id)
     switch(id) {
      case "1": return <PortfolioContent image = {s_flashmo_022_park_34} title = "Portfolio1" /> 
      case "2": return <PortfolioContent image = {s_flashmo_022_park_20} title = "Portfolio2" />
      case "3": return <PortfolioContent image = {s_flashmo_022_park_34} title = "Portfolio3" />
      case "4": return  <PortfolioContent image = {s_flashmo_022_park_20} title = "Portfolio4" />
      default:
        return  <>
        <PortfolioContent image = {s_flashmo_022_park_34} title = "Portfolio1" />
         <PortfolioContent image = {s_flashmo_022_park_20} title = "Portfolio2" />
         <PortfolioContent image = {s_flashmo_022_park_34} title = "Portfolio3" />
         <PortfolioContent image = {s_flashmo_022_park_20} title = "Portfolio4" />
         </>
         break;
     }
  }
  
  return (
    <>
    {showContent()}
  {/* <>
      <PortfolioContent image = {s_flashmo_022_park_34} title = "Portfolio1" />
        <PortfolioContent image = {s_flashmo_022_park_20} title = "Portfolio2" />
        <PortfolioContent image = {s_flashmo_022_park_34} title = "Portfolio3" />
        <PortfolioContent image = {s_flashmo_022_park_20} title = "Portfolio4" />
        </> */}
     
    </>
  );
};

export default Portfolio;
