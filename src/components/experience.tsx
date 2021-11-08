/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from '../components/timeline'

/* ---------------------------------------------------------------------- */

export const Experience = () => {
    return (
        <section className='container'>
            <h2>Experience</h2>
            <ul>
                <Timeline
                    title='Innovation and technology fair (FeCeap)'
                    subtitle={`'Bares' application (Delivery)`}
                    description={`This project had a partnership with 'Etec Irmã Agostina'. I worked on the idealization and was a part responsible for creating the mobile app.`}
                    data='From aug. to nov. 2019 | Ceap'
                    link='https://drive.google.com/file/d/1408tcdGv-okp5Ir8dzezivcBdITgyQWr/view?usp=sharing' // Banner
                    //link='https://drive.google.com/file/d/1YmSVvBxDYA2P0GEbpT6wFpSZElJcSPAc/view?usp=sharing' // Panfleto
                    context='experience'
                />
                <Timeline
                    title='Innovation and technology fair (FeCeap)'
                    subtitle='Laser security system'
                    description='In this project I was responsible for the assembly of the system, logic and design.'
                    data='From aug. to nov. 2018 | Ceap'
                    link='https://github.com/NyctibiusVII/Sistema-de-seguranca-a-laser'
                    context='experience'
                    last={true}
                />
            </ul>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container ul { width: 90%; }

                @media (min-width: 450px) { .container ul { max-width: 80%; } }
                @media (min-width: 550px) { .container ul { max-width: 70%; } }
                @media (min-width: 650px) { .container ul { max-width: 65%; } }

                @media (min-width: 750px) { .container { align-items: flex-start; } .container ul { max-width: 100%; } }
            `}</style>
        </section>
    )
}