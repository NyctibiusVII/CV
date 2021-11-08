/* Import ---------------------------------------------------------------------- */ // - x70

import { Profile }    from '../components/profile'
import { Social }     from '../components/social'
import { Summary }    from '../components/summary'
import { Education }  from '../components/education'
import { Skills }     from '../components/skills'
import { Experience } from '../components/experience'
import { Languages }  from '../components/languages'

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
                <Skills />
            </aside>

            <main className={styles.main}>
                <Experience />

                <h2>CERTIFICATES</h2>
                <h2>REFERENCES</h2>

                <Languages />

                <h2>INTERESTS</h2>
            </main>
        </div>
    )
}