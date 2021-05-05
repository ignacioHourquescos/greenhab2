
import {useState} from 'react'
import styles from './index.module.scss'
import Button from '../../components/UI/Button'
import { useRouter } from 'next/router';
import PlantButton from '../../components/PlantButton/PlantButton'

export default function CheckOut() {

   const [onBoarding, setOnBoarding] = useState(false)


   return (<>
      
         <div className={styles.container}>
            <h1 className={styles.title}>green.hab</h1>
            <p className={styles.slogan}>Plant factory</p>
            <Button
               backgroundColor={'transparent'}
               borderColor={'white'} 
               ><div >Entrar</div></Button>     
         </div>
         
         <PlantButton/>
      
   </>)
}
