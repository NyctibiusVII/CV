/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from '../components/timeline'

/* ---------------------------------------------------------------------- */

export const Education = () => {
    return (
        <div className='container'>
            <h2>Education</h2>
            <ul>
                <Timeline
                    title='Uniamérica Descomplica'
                    subtitle='Faculdade Descomplica Digital'
                    description='University education'
                    data='2022 - 2024'
                    link='https://descomplica.com.br'
                    decoration={true}
                    context='education'
                />
                <Timeline
                    title='Ceap'
                    subtitle='Centro Educacional Assistencial Profissionalizante'
                    description='Technical school (NGO)'
                    data='2018 - 2019'
                    link='https://ceappedreira.org.br'
                    decoration={true}
                    context='education'
                />
                <Timeline
                    title='Zenaide'
                    subtitle='E.E. Profª Zenaide Lopes de Oliveira Godoy'
                    description='High school'
                    data='2017 - 2019'
                    link='https://www.google.com/search?q=zenaide+lopes+de+oliveira+godoy'
                    decoration={true}
                    context='education'
                    last={true}
                />
            </ul>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container ul { width: 70%; }



                /* Desktop */
                @media (min-width: 350px) { .container ul { max-width: 60%; } }
                @media (min-width: 450px) { .container ul { max-width: 50%; } }
                @media (min-width: 550px) { .container ul { max-width: 40%; } }
                @media (min-width: 650px) { .container ul { max-width: 30%; } }
                @media (min-width: 750px) { .container { align-items: flex-start; } .container ul { max-width: 100%; } }
            `}</style>
        </div>
    )
}