import Head from 'next/head'
import {useState} from 'react'
import styles from './index.module.scss'
import PlantGrid from '../../components/Plant/PlantGrid'
import PlantScroll from '../../components/PlantScroll/PlantScroll'
import useAppContext from '../../context/AppContext';
import PlantButton from '../../components/PlantButton/PlantButton'
import Button from '../../components/UI/Button'

export default function Home() {
   const {plantArray2, desiredPlant} =useAppContext();

   const [selectedPlant, setSelectedPlant]=useState();

   const plantedGridHandler = (selectedPlant) =>{
      alert("click on bucket")
   }

   const selectedPlantHandler = (plant) =>{
      setSelectedPlant(plant)
      alert(plantArray2)
   }

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Elegi tu propia siembra!</h2>
      <PlantScroll/>
      <PlantGrid 
         plantedGridHandler={plantedGridHandler} 
         selectedPlantHandler={selectedPlantHandler}
      />

      {/* <h1>Me confundi. Plantar todo de nuevo!</h1> */}
      <Button backgroundColor={"white"} borderColor={"purple"}>
         <div style={{color:"black"}}>Reiniciar</div>
      </Button>
      <PlantButton/>
      
    </div>
  )
}
