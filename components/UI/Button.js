import styles from './Button.module.scss'

const Button = (props) =>{


   return(<>
   
      <button className={styles.button} 
         style={{ 
            backgroundColor:props.backgroundColor,
            borderColor: props.borderColor  
         }}>

         {props.children}
      
      </button>
   
   </>)
}

export default Button;