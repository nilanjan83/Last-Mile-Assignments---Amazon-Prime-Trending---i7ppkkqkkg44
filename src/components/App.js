import React, {Component, useState} from "react";
import slides from "../data";
import '../styles/App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  carouselRoot:{
    minHeight: 200,
    "& ul":{
      marginTop:"50px"
    }
  },
  carouselPaper:{
    width: "50%",
    margin:"auto"
  }
}));

const App = () => {
  const classes = useStyles();
  const handleReClick = (index) =>{
    
  }
  const handlePrevClick = (index) =>{

  }
  const handleNextClick = (index) =>{

  }
  return (
    <>
    <Carousel showArrows={true} className={classes.carouselRoot}>
      {slides.map((item,index) =>{
        return(
          <Paper className={classes.carouselPaper}>
          <h1 data-testid="title">{item.title}</h1>
          <p data-testid="text">{item.text}</p>
          </Paper>
        )
      })}
    </Carousel>
    <button data-testid="button-restart" onClick={()=>handleReClick(index)}>Restart</button>
    <button data-testid="button-prev" onClick={()=>handlePrevClick(index)}>Prev</button>
    <button data-testid="button-next" onClick={()=>handleNextClick(index)}>Next</button>
    
    </>
  )
}


export default App;