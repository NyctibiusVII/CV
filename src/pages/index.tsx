/* Import ---------------------------------------------------------------------- */ // - x70

import { Profile }   from '../components/profile'
import { Social }    from '../components/social'
import { Summary }   from '../components/summary'
import { Education } from '../components/education'
import { Skills }    from '../components/skills'
import { Experience }   from '../components/experience'
import { Certificates } from '../components/certificates'
import { Languages }    from '../components/languages'
import { Interests }    from '../components/interests'

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
                <Certificates />
                <Languages />
                <Interests />
            </main>
        </div>
    )
}