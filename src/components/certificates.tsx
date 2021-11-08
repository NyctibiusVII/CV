/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from '../components/timeline'

/* ---------------------------------------------------------------------- */

export const Certificates = () => {
    return (
        <div className='container'>
            <h2>Certificates</h2>
            <ul>
                <Timeline
                    title='Responsiveness and User Experience Concepts'
                    subtitle='DIO'
                    description='Digital Innovation One Inc.'
                    data='Issued in dev. 2020'
                    link='https://certificates.digitalinnovation.one/A2124FBC'
                    context='education'
                />
                <Timeline
                    title='Computer technician'
                    subtitle='Ceap'
                    description='CEAP - Centro Educacional Assistencial Profissionalizante'
                    data='Issued in feb. 2020'
                    link='https://ceappedreira.org.br'
                    context='education'
                />
            </ul>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container ul { padding: 0 1rem; }



                /* Desktop */
                @media (min-width: 750px) { .container { align-items: flex-start; } .container ul { padding: 0; } }
            `}</style>
        </div>
    )
}