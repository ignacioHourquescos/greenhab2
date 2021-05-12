import Head from 'next/head'
import {useState, useRef} from 'react'
import styles from './index.module.scss'
import PlantGrid from '../../components/Plant/PlantGrid'
import PlantScroll from '../../components/PlantScroll/PlantScroll'
import useAppContext from '../../context/AppContext';
import PlantButton from '../../components/PlantButton/PlantButton'
import Button from '../../components/UI/Button'
import swal from 'sweetalert'
import { useRouter } from 'next/router'


export default function Home() {
   const {plantArray2, desiredPlant, clearPlantArray, userData, setUserDataHandle, isEmpty} =useAppContext();

   const [selectedPlant, setSelectedPlant]=useState();
   const nameRef = useRef('');
   const emailRef = useRef('');
   const [checkout, setCheckout] = useState(false)
   const [nameRefCurrent , setNameRefCurrent] = useState('')

   const plantedGridHandler = (selectedPlant) =>{
      alert("click on bucket")
   }

   const selectedPlantHandler = (plant) =>{
      setSelectedPlant(plant)
      alert(plantArray2)
   }

   const clearGridHandler = () =>{clearPlantArray();}
   const checkoutHandler = () =>{
      if(isEmpty()){
         swal("Su siembra esta vacia")
         return;
      }setCheckout(true)
      setNameRefCurrent(nameRef.current.value)}

   const checkoutHandlerClose = () =>{
      setCheckout(false);
      
   }


   const userDataHandler = () =>{
      setNameRefCurrent(nameRef.current.value)
   }


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Somos lo que comemos!{userData.name}</h2>
      
      <PlantScroll/>
      <PlantGrid 
         plantedGridHandler={plantedGridHandler} 
         selectedPlantHandler={selectedPlantHandler}
      />

      <div className={styles.button_container}>
         <Button 
            backgroundColor={"white"} 
            borderColor={"purple"}
            >
            <div style={{color:"black"}} onClick={clearGridHandler}>Reiniciar</div>
         </Button>

         <Button 
            backgroundColor={"purple"} 
            borderColor={"purple"}
            >
            <div style={{color:"white"}} onClick={checkoutHandler}>Plantar</div>
         </Button>
 
      </div>

      {
         checkout
         ?
            <>
               <div className={styles.container_checkout}>
               <div style={{position:"fixed", top:"2rem", right:"3rem", fontSize:"2rem", color:"white"}} onClick={checkoutHandlerClose}>X</div>
               <input className={styles.name} ref={nameRef}  placeholder="nombre"></input>
               <input className={styles.name} ref={emailRef} placeholder="mail"></input>            
               <PlantButton onClick={userDataHandler} name={nameRefCurrent} mail={"algo"} />     
               </div>            
            </>
         : 
            ""
      }
      
    </div>
  )
}
