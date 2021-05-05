import styles from './index.module.scss'
import { useRouter } from 'next/router';
import {useRef, useState} from 'react';
import Button from '../../components/UI/Button'
import useAppContext from '../../context/AppContext';

export default function Home() {
   const {setUserDataHandler} =useAppContext();
   const [ preOnBoarding, setPreOnBoarding] = useState(true);
   const nameRef = useRef()

   const router = useRouter();
   const goToMain = () => {
 
       router.push('/main');
   }

   const setPreOnBoardingHandler = () =>{
      setPreOnBoarding(false);
   }


   return (
   <>
      {
            preOnBoarding
         ? 
            <div className={styles.container} onClick={setPreOnBoardingHandler}>
               <p className={styles.name}>"La civilizacion de la tercera ola es la que cierra la brecha historica entre productor y consumidor, dando origen al prosumidor"</p>
               <p className={styles.author}>Alvin Toffler, 1980</p>
            </div>
         :
            <div className={styles.container}>
            <p className={styles.name}>¿Como funciona?</p>
               <p className={styles.name_left}>Elegis las verduras que te gusten y las plantas sin moverte de tu casa </p>
               <p className={styles.name_right}>Nosotros te mantenemos al tanto de como viene tu plantacion</p>
               <p className={styles.name_left}>Elejis en que etapa cosecharlas (plantines para tu huerta o listas para tu mesa) y las recibis en tu casa </p>

               {/* <p className={styles.name}>Somos lo que comemos</p> */}
               <Button  onClick={goToMain}
                  backgroundColor={'transparent'}
                  borderColor={'white'} >
                  <div onClick={goToMain}>Plantar mi propia comida</div></Button>
            </div>
      }
   
      
   
   </>)
}
