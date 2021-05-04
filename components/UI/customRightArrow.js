
import React from 'react'



 export const CustomRightArrow = ({ onClick, ...rest }) => {
   const {
     onMove,
     carouselState: { currentSlide, deviceType }
   } = rest;
   // onMove means if dragging or swiping in progress.
   return <button style={styles.arrow_right} onClick={() => onClick()}>-</button>;
 };



 export const CustomLeftArrow = ({ onClick, ...rest }) => {
   const {
     onMove,
     carouselState: { currentSlide, deviceType }
   } = rest;
   // onMove means if dragging or swiping in progress.
   return <button style={styles.arrow_left} onClick={() => onClick()}>-</button>;
 };

 const styles = {
    arrow_right:{
       width: "10px",
       heihgt: "10px",
       backgroundColor:"black",
       position:"absolute",
       right:"calc(4% - 1px)",
       borderRadius:"2000px",
       padding:"0 0.5rem"
    },
    arrow_left:{
      width: "10px",
      heihgt: "10px",
      backgroundColor:"black",
      position:"absolute",
      left:"calc(4% + 1px)",
      borderRadius:"200px"
    }
 }