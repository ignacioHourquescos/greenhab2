import styles from './Header.module.scss'

import Image from 'next/image'

 const Header = () =>{

   return(<>
      <div className={styles.container}>

          <h1 className={styles.title}>Eleji que plantar</h1>

      </div>
   </>)
}

export default Header;