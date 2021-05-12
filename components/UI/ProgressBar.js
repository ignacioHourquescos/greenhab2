import { Progress } from 'antd';
import * as React from 'react';

import styles from "./ProgressBar.module.scss"


const ProgressBar =  ({width, percent, duration}) => {

   const [value, setValue] = React.useState(0);

   React.useEffect(() => {
     setValue(percent * width);
   });
 
   return (
     <div>
       <div className={styles.progress_div} style={{ width: width }}>
         <div style={{ width: `${value}px`, transition: `${duration}s`}} className={styles.progress} />
       </div>
     </div>
   );
 };


export default ProgressBar;