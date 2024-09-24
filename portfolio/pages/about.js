import Link from 'next/link'
import Layout from '../components/layout'

import styles from '../styles/About.module.css'

export default function About(){
    return (
        <container className={styles.box}>
        <center>
        <div>
        <h1 className="text-2xl font-bold">About Me</h1>       
        </div>
        <div>
            <p className={styles.about}>Sinclair is a web developer  interested in all things tech, constantly learning about the ever-expanding field. In his free time he enjoys playing tennis, photography, collecting baseball cards, gardening, cooking, and travelling, among other things. He has travelled to over fourteen countries (so far) and plans on visiting more. He is an avid baseball fan and enjoys rooting on the San Diego Padres. He hopes to see them win the World Series one day.</p>
        </div>
        
        </center>
        </container>
    )
}