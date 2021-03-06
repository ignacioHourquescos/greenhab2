
import {useState} from 'react'
import styles from './index.module.scss'
import Button from '../components/UI/Button'
import { useRouter } from 'next/router';

export default function Home() {

   const [onBoarding, setOnBoarding] = useState(false)

   const router = useRouter();
   const goToOnboarding = () => {
       router.push('/onboarding');
   }


   return (<>
      
         <div className={styles.container}>
            <h1 className={styles.title}>green.hab</h1>
            <p className={styles.slogan}>Plant factory</p>
            <Button
               backgroundColor={'transparent'}
               borderColor={'white'} 
               ><div onClick={goToOnboarding}>Entrar</div></Button>     
         </div>
         
      
      
   </>)
}
