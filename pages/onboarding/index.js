import styles from './index.module.scss'
import { useRouter } from 'next/router';
import {useRef, useState} from 'react';
import Button from '../../components/UI/Button'
import useAppContext from '../../context/AppContext';
import ProgressBar from '../../components/UI/ProgressBar';

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
   function myFunction() {
      setTimeout(()=>{setPreOnBoarding(false)}, 8000);
    }

    myFunction()

   return (
   <>
      {
            preOnBoarding
         ? 
            <div className={styles.container} onClick={setPreOnBoardingHandler}>
               <p className={styles.name}>"La civilizacion de la tercera ola es la que cierra la brecha historica entre productor y consumidor, dando origen al prosumidor"</p>
               <p className={styles.author}>Alvin Toffler, 1980</p>
               <ProgressBar width={250} percent={1} duration={8}/>
            </div>
         :
            <div className={styles.container}>
            <p className={styles.name}>¿Como funciona?</p>
               <p className={styles.name_left}>Elegis las verduras que te gustan y las plantas sin moverte de tu casa </p>
               <p className={styles.name_right}>Nosotros te mantenemos al tanto de como viene tu plantacion</p>
               <p className={styles.name_left}>Elejis en que etapa cosecharlas 
               <br/> - Plantines para tu huerta 
               <br/> - Plantines para tu sistema hidroponico 
               <br/> - Listas para comer </p>
               <p className={styles.name_right}>Te las llevamos a tu casa</p>

               {/* <p className={styles.name}>Somos lo que comemos</p> */}
               <Button  onClick={goToMain}
                  backgroundColor={'transparent'}
                  borderColor={'white'} >
                  <div onClick={goToMain}>Plantar mi comida</div></Button>
            </div>
      }
   
      
   
   </>)
}
