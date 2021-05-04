import React from 'react';
import styles from './PlantGrid.module.scss'
import PlantBucket from './PlantBucket'
import useAppContext from '../../context/AppContext';

const PlantGrid = (props) =>{

   const {plantArray2} =useAppContext();

   return(<>
      <div className={styles.grid_container}>
         {plantArray2.map((plant) =>(
            <PlantBucket 
               plant={plant} 
               img={plant.img}
            />
         ))}

      </div>
   
   </>)

}

export default PlantGrid