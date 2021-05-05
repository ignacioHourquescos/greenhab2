
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)





export const AppWrapper = ({ children }) => {

   //PLANT GRID 
    const [plantArray2, setPlantArray2] = useState([
      {id:1,   img:'/lechuga.png',  plant:"carne"},
      {id:2,   img:'/lechuga.png',  plant:"pollo"},
      {id:3,   img:'/lechuga.png',  plant:""},
      {id:4,   img:'/lechuga.png',  plant:""},
      {id:5,   img:'/lechuga.png',  plant:""},
      {id:6,   img:'/lechuga.png',  plant:""},
      {id:7,   img:'/rucula.png',  plant:""},
      {id:8,   img:'/lechuga.png',  plant:""},
      {id:9,   img:'/lechuga.png',  plant:""},
      {id:10,  img:'/lechuga.png',  plant:""},
      {id:11,  img:'/lechuga.png',  plant:""},
      {id:12,  img:'/lechuga.png',  plant:""},
      {id:13,  img:'/lechuga.png',  plant:""},
      {id:14,  img:'/lechuga.png',  plant:""},
      {id:15,  img:'/lechuga.png',  plant:""},
      {id:16,  img:'/lechuga.png',  plant:""},
      {id:17,  img:'/lechuga.png',  plant:""},
      {id:18,  img:'/lechuga.png',  plant:""},
      {id:19,  img:'/lechuga.png',  plant:""},
      {id:20,  img:'/lechuga.png',  plant:""}
   ])
   //AVAILABLE PLANTS 
   const [availablePlants, setAvailablePlants] = useState([
      {id:1, img:"/lechuga.png", harvest:"50 dias", plant:"Lechuga"},
      {id:1, img:"/rucula.png", harvest:"50 dias", plant:"Rúcula"},
      {id:1, img:"/espinaca.png", harvest:"50 dias", plant:"Espinaca"},
      {id:1, img:"/lechugaMorada.jpg", harvest:"50 dias", plant:"Lechuga Morada"},
      {id:1, img:"/kaleRojo.jpg", harvest:"50 dias", plant:"Kale rojo"},

      {id:1, img:"/kaleBlanco.jpg", harvest:"50 dias", plant:"Kale Blanco"},


   ])

   //DESIRED PLANT
   const [desiredPlant, setDesiredPlant] = useState('');

   

   //SETS THE INDICATED DESIRED PLANT
   const desiredPlantHandler = (element) =>{
      setDesiredPlant(element);
   }

   //PLNATING DESIRED FUNCTION INTO GRID
   const plantingHandler = (element, desiredPlant) => {
      const position= plantArray2.findIndex((obj => obj.id == element.id));
      //const modifiedplantArray = plantArray2.splice(0,20,{id:1, plant:"clechuga muyr ruca"})
      let modifiedPlantArray = plantArray2.filter(plant => plant.id != element.id)
      let modifiedPlantArray2 = [...modifiedPlantArray,  {id:element.id, plant:desiredPlant.plant, img:desiredPlant.img}]
      let sortedModifiedArray= modifiedPlantArray2.sort(function(a, b) {
         return parseFloat(a.id) - parseFloat(b.id);
     });
      
      setPlantArray2(sortedModifiedArray);


      console.log(sortedModifiedArray)
      
      
   }

    return (
        <AppContext.Provider value={
            {
               desiredPlant,
               plantArray2,
               availablePlants,
               desiredPlantHandler,
               plantingHandler

            }}>
            {children}</AppContext.Provider>)
}


export default useAppContext