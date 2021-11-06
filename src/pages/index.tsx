/* Import ---------------------------------------------------------------------- */ // - x70

import Head  from 'next/head'
import Image from 'next/image'

import styles from '../styles/pages/home.module.scss'

/* ---------------------------------------------------------------------- */

export default function Home() {
    return (
        <div className={styles.container}>
            <Head><title>CV - Matheus Vidigal</title></Head>

            <aside className={styles.sidebar}>
                <h1 className={styles.name}>Matheus Vidigal</h1>

                <p className={styles.description}>
                    <code className={styles.code}>Web Developer</code>
                </p>
            </aside>
            
            <main className={styles.main}>

            </main>
        </div>
    )
}