import React, {Component, useState} from "react";
import slides from "../data";
import '../styles/App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const App = () => {
  const handleReClick = (index) =>{
    
  }
  const handlePrevClick = (index) =>{

  }
  const handleNextClick = (index) =>{

  }
  return (
    <>
    <Carousel showArrows={true}>
    <div>{slides.map((item,index) =>{
      return(
        <>
        <h1 data-testid="title">{item.title}</h1>
        <p data-testid="text">{item.text}</p>
        </>
      )
    })}</div>
    </Carousel>
    <button data-testid="button-restart" onClick={()=>handleReClick(index)}>Restart</button>
    <button data-testid="button-prev" onClick={()=>handlePrevClick(index)}>Prev</button>
    <button data-testid="button-next" onClick={()=>handleNextClick(index)}>Next</button>
    
    </>
  )
}


export default App;
