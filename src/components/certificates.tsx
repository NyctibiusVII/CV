/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from '../components/timeline'

/* ---------------------------------------------------------------------- */

export const Certificates = () => {
    return (
        <div className='container'>
            <h2>Certificates</h2>
            <ul>
                <Timeline
                    title='Full Stack Developer Junior'
                    subtitle='StartSe'
                    description='.StartSe (Tech Academy)'
                    data='Issued in Jul. 2022'
                    link='https://drive.google.com/file/d/1HUFg14JZcL5r78lVoExJq70kHu547h9H/view'
                    context='education'
                />
                <Timeline
                    title='ReactJS | NextJS'
                    subtitle='Rocketseat'
                    description='Rocketseat (Ignite - trail ReactJS)'
                    data='Issued in dec. 2021'
                    link='https://app.rocketseat.com.br/api/certificates/pdf/211eefbd-c6b6-47c8-b56b-8297b3d7eb66'
                    context='education'
                />
                <Timeline
                    title='Responsiveness and User Experience Concepts'
                    subtitle='DIO'
                    description='Digital Innovation One Inc.'
                    data='Issued in dec. 2020'
                    link='https://certificates.digitalinnovation.one/A2124FBC'
                    context='education'
                />
                <Timeline
                    title='Computer technician'
                    subtitle='Ceap'
                    description='CEAP - Centro Educacional Assistencial Profissionalizante'
                    data='Issued in feb. 2020'
                    link='https://drive.google.com/file/d/1c4iyXF9hvKKRG1K82b9V9U7NvOqXHUGm/view'
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