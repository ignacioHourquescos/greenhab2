import Head from 'next/head'
import {useState} from 'react'
import styles from './index.module.scss'
import PlantGrid from '../../components/Plant/PlantGrid'
import PlantScroll from '../../components/PlantScroll/PlantScroll'
import useAppContext from '../../context/AppContext';
import PlantButton from '../../components/PlantButton/PlantButton'

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

      <PlantGrid 
         plantedGridHandler={plantedGridHandler} 
         selectedPlantHandler={selectedPlantHandler}
      />
      <PlantScroll/>
      {desiredPlant.name}
      <PlantButton/>

    </div>
  )
}
