
import {useState} from 'react'
import styles from './index.module.scss'
import Button from '../components/UI/Button'
import { useRouter } from 'next/router';

export default function Home() {

   const [onBoarding, setOnBoarding] = useState(false)

   const router = useRouter();
   const goToIntro = () => {
       router.push('/intro');
   }


   return (<>
      { !onBoarding
         ?
         <div className={styles.container}>
            <h1 className={styles.title}>green.hab</h1>
            <p className={styles.slogan}>planta tu propia comida.</p>
            <Button
               backgroundColor={'transparent'}
               borderColor={'white'} 
               ><div onClick={()=>setOnBoarding(true)}>Plantar mi propia comida</div></Button>     
         </div>
         
         :<>
         <div className={styles.container2}></div>
         <div className={styles.container3}>
            <p className={styles.text} style={{textAlign:'left'}}>
               Eleji las opciones de la temporada.<br/><br/></p>
            <p className={styles.text} style={{textAlign:'right'}}>
            Las plantamos.<br/><br/></p>
            <p className={styles.text} style={{textAlign:'left'}}>
            Monitoreals.<br/><br/></p>
            <Button
                  backgroundColor={'transparent'}
                  borderColor={'white'} 
                  ><div onClick={goToIntro}>Plantar mi propia comida</div></Button>     
            </div>
        </>
      }
   </>)
}
