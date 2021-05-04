import React from 'react';
import styles from './PlantButton.module.scss'
import useAppContext from '../../context/AppContext';
import Button from '../UI/Button'

import emailjs from 'emailjs-com';

const PlantButton= (props) =>{

   const {plantArray2} =useAppContext();

   function sendEmail(e) {
      e.preventDefault();
     //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    emailjs.sendForm('service_86uzq1f', 'template_r6ggptl', e.target, 'user_QCQLrpkOhJhKGDFs7I4oR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log(e.target);
      console.log(plantArray2);
        
    }
  
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" hidden value={plantArray2[0].plant} name="plant1" />
        <input type="text" hidden value={plantArray2[1].plant} name="plant2" />
        <input type="text" hidden value={plantArray2[2].plant} name="plant3" />
        <input type="text" hidden value={plantArray2[3].plant} name="plant4" />
        <input type="text" hidden value={plantArray2[4].plant} name="plant5" />
        <input type="text" hidden value={plantArray2[5].plant} name="plant6" />
        <input type="text" hidden value={plantArray2[6].plant} name="plant7" />
        <input type="text" hidden value={plantArray2[7].plant} name="plant8" />
        <input type="text" hidden value={plantArray2[8].plant} name="plant9" />
        <input type="text" hidden value={plantArray2[9].plant} name="plant10" />
        <input type="text" hidden value={plantArray2[10].plant} name="plant11" />
        <input type="text" hidden value={plantArray2[11].plant} name="plant12" />
        <input type="text" hidden value={plantArray2[12].plant} name="plant13" />
        <input type="text" hidden value={plantArray2[13].plant} name="plant14" />
        <input type="text" hidden value={plantArray2[14].plant} name="plant15" />
        <input type="text" hidden value={plantArray2[15].plant} name="plant16" />
        <input type="text" hidden value={plantArray2[16].plant} name="plant17" />
        <input type="text" hidden value={plantArray2[17].plant} name="plant18" />
        <input type="text" hidden value={plantArray2[18].plant} name="plant19" />
        <input type="text" hidden value={plantArray2[19].plant} name="plant20" />
  
        <Button className={styles.plant_button} type="submit" value="Send">
        <div >Plantar</div>
        </Button>
      </form>
    );


}

export default PlantButton

