
import React from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


 export const CustomRightArrow = ({ onClick, ...rest }) => {
   const {
     onMove,
     carouselState: { currentSlide, deviceType }
   } = rest;
   // onMove means if dragging or swiping in progress.
   return <button style={styles.arrow_right} onClick={() => onClick()}>
      <FaChevronRight/>
   </button>;
 };



 export const CustomLeftArrow = ({ onClick, ...rest }) => {
   const {
     onMove,
     carouselState: { currentSlide, deviceType }
   } = rest;
   // onMove means if dragging or swiping in progress.
   return <button style={styles.arrow_left} onClick={() => onClick()}> 
 <FaChevronLeft />
      </button>;
 };

 const styles = {
    arrow_right:{
      height: "100px",
         border:"none",
       position:"absolute",
       right:"calc(2% + 1px)",
       borderRadius:"200px",
       backgroundColor:"transparent"       
    },
    arrow_left:{

      height: "100px",
      position:"absolute",
      backgroundColor:"transparent",
      left:"calc(2% + 1px)",
      borderRadius:"200px",
      border:"none"
    }
 }

 

 const arrow_left=<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 10 10" stroke="currentColor">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>