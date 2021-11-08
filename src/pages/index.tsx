/* Import ---------------------------------------------------------------------- */ // - x70

import { Profile }   from '../components/profile'
import { Social }    from '../components/social'
import { Summary }   from '../components/summary'
import { Education } from '../components/education'

import Head  from 'next/head'

import styles from '../styles/pages/home.module.scss'

/* ---------------------------------------------------------------------- */

export default function Home() {
    return (
        <div className={styles.container}>
            <Head><title>CV - Matheus Vidigal</title></Head>

            <aside>
                <Profile />
                <Social />
                <Summary />
                <Education />

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