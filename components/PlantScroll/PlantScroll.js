import React, {useState} from 'react';
import styles from './PlantScroll.module.scss'
import Carousel from "react-multi-carousel";
import PlantItem from './PlantItem';
import "react-multi-carousel/lib/styles.css";
import useAppContext from '../../context/AppContext';
import {CustomRightArrow, CustomLeftArrow} from '../UI/customRightArrow'

const PlantScroll = (props) =>{

   const {availablePlants} =useAppContext();
   

   return(<>

   <div className={styles.container}>
      <Carousel 
         responsive={responsive} 
         showDots={false} 
         arrows={true} 
         customRightArrow={<CustomRightArrow/>}
         customLeftArrow={<CustomLeftArrow/>}>
         {
            availablePlants.map((plant)=>
               <PlantItem 
                  plant={plant}
                  name={plant.name} 
                  harvest={plant.harvest}
                  img={plant.img}
               />)
         }
      </Carousel>
   </div>
      
   </>)

}

export default PlantScroll


const responsive = {
   superLargeDesktop: {
     // the naming can be any, depends on you.
     breakpoint: { max: 4000, min: 3000 },
     items: 5
   },
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 3
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 1
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1
   }
 };