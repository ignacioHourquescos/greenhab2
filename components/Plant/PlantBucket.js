import React, {useState} from 'react';
import styles from './PlantBucket.module.scss'
import useAppContext from '../../context/AppContext';
import Image from 'next/image'


const PlantBucket = (props) =>{

   const {desiredPlantHandler, desiredPlant, plantingHandler, emptyGrid} =useAppContext();
   const [readyToPlant, setReadyToPlant] = useState(false)

   const bucketClickHandler = () =>{
      if(desiredPlant==''){
         swal("No tiene ninguna verdura seleccionada! ");
         return;
        }
 
      plantingHandler(props.plant, desiredPlant);
      setReadyToPlant(true)
      
   }

   return(<>
      <div className={styles.bucket_container}  
         onClick={bucketClickHandler}>
            {
               !readyToPlant || emptyGrid
            ?
            ""
            :
               <img
               src={props.img}
       
               />
            }
         <h1>{props.plantName}</h1>
      </div>
   
   </>)

}

export default PlantBucket