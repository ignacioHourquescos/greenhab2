
import PlantButton from '../../components/PlantButton/PlantButton'
import styles from './index.module.scss'


export default function Home() {


   return (<>       
      <div className={styles.container}>
            <img className={styles.image} src={"./chugaluga.png"}/>
            <div className={styles.care_info}>
               <div className={styles.care_info_detail}>
                  <h2>Recipiente</h2>
                  Envase de Vidrio o plastico
               </div>
               <div className={styles.care_info_detail}>
               <h2>Luz </h2>
               Que las hojas tengan acceso a luz solar</div>
               <div className={styles.care_info_detail}>
               <h2>Nutricion</h2>
               2 cm de agua, lo suficente para que se nutran las raices</div>
            </div>
      </div>


      <div className={styles.container2}>
         <h2>Como preservar tus plantas.</h2>
         <p>Las plantas hidroponicas siguen vivas al momento de llegar a tu casa. 
Te recomiendo que las coloques en recipientes de vidrio o plastico que tengan una pequena lamina de agua (idealmente filtrada). 
Procura que el sustrato no este sumergido y que solo las puntas de las raices toquen el agua. 
De esta forma las poder tener arriba del mostrador de la cocina o en la mesa e ir cosechando las hojas a medida que las necesitas ! 
</p>
      </div>

      

      <div className={styles.container3}>
         <h2>Impacto</h2>
         <p>Menos Desperidicio</p>
         <p>Sin pesticicas y agroquimicos</p>
         <p>Uso mas eficiente del agua</p>
         <p>Trazabilidad</p>

      </div>

      <div className={styles.container4}>
    
         <p>Todas las plantas fueron cultivadas en el invernadero de Green Hab utilizando tecnicas hidroponicas.  Desde semilla a cosecha fueron manipuladas por solo una persona. </p>
 
      </div>


   </>)
}
