import styles from './Header.module.scss'

import Image from 'next/image'

 const Header = () =>{

   return(<>
      <div className={styles.container}>
      {/* <Image
        src="/logo.png"
                height={40}
        width={120}

      /> */}
         {/* <h1>Green hab</h1> */}

      </div>
   </>)
}

export default Header;