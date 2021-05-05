import styles from './PlantItem.module.scss'
import Image from 'next/image'
import useAppContext from '../../context/AppContext';

 const PlantItem= (props) =>{

   const {desiredPlantHandler} =useAppContext();

   return(<>
      <div className={styles.container} onClick={()=>(desiredPlantHandler(props.plant))}>
      <img className={styles.image}
         src={props.img}
     
         width={70}
         height={50}
      />
      <div className={styles.data}>
         <h3>{props.name}</h3>
         <h5>Tiempo de Cosecha:</h5>
         <h5>{props.harvest}</h5>
      </div>

      </div>
   </>)
}

export default PlantItem;