import Navbar from './navbar'
import Footer from './footer'

import styles from '../styles/Layout.module.css'

 
export default function Layout({ children }) {
  return (
    <container className={styles.wrap}>
    
      <Navbar className={styles.nav}/>
      <main className={styles.body}>{children}</main>
      <Footer className={styles.foot}/>

    </container>
  )
}