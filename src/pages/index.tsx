/* Import ---------------------------------------------------------------------- */ // - x70

import { Profile } from '../components/profile'

import Head  from 'next/head'

import styles from '../styles/pages/home.module.scss'

/* ---------------------------------------------------------------------- */

export default function Home() {
    return (
        <div className={styles.container}>
            <Head><title>CV - Matheus Vidigal</title></Head>

            <aside>
                <Profile />

                <br/>
                <h2>SOCIAL</h2>
                <h2>PROFILE</h2>
                <h2>EDUCATION</h2>
                <h2>SKILLS</h2>
            </aside>

            <main className={styles.main}>
                <h2>EXPERIENCE</h2>
                <h2>CERTIFICATES</h2>
                <h2>REFERENCES</h2>
                <h2>LANGUAGES</h2>
                <h2>INTERESTS</h2>
            </main>
        </div>
    )
}