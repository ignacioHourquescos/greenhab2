import React from 'react';
import styles from './PlantGrid.module.scss'
import PlantBucket from './PlantBucket'
import useAppContext from '../../context/AppContext';

const PlantGrid = (props) =>{

   const {plantArray2} =useAppContext();

   return(<>
   {/* <h2 className={styles.title}>Elegi tu propia siembra!</h2> */}
      <div className={styles.grid_container}>
         {plantArray2.map((plant) =>(
            <PlantBucket 
               key={plant.id}
               plant={plant} 
               img={plant.img}
            />
         ))}

      </div>
   
   </>)

}

export default PlantGrid