import React, {useState} from 'react';
import styles from './PlantBucket.module.scss'
import useAppContext from '../../context/AppContext';
import Image from 'next/image'

const PlantBucket = (props) =>{

   const {desiredPlantHandler, desiredPlant, plantingHandler} =useAppContext();
   const [readyToPlant, setReadyToPlant] = useState(false)

   const bucketClickHandler = () =>{
      plantingHandler(props.plant, desiredPlant);
      setReadyToPlant((true))
   }

   return(<>
      <div className={styles.bucket_container}  
         onClick={bucketClickHandler}>
            {
               !readyToPlant
            ?
               <Image
                  src={'/fenolico.jpg'}
                  height={80}
                  width={80}
               />
            :
               <Image
               src={props.img}
               height={80}
               width={80}
               />
            }
         <h1>{props.plantName}</h1>
      </div>
   
   </>)

}

export default PlantBucket