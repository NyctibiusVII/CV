/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from '../components/timeline'

/* ---------------------------------------------------------------------- */

export const Education = () => {
    return (
        <div className='container'>
            <h2>Education</h2>
            <ul>
                <Timeline
                    title='Ceap'
                    titleAttribute='Centro Educacional Assistencial Profissionalizante'
                    description='Technical school (NGO)'
                    data='2018 - 2019'
                    link='https://ceappedreira.org.br'
                    context='education'
                />
                <Timeline
                    title='Zenaide'
                    titleAttribute='E.E. Profª Zenaide Lopes de Oliveira Godoy'
                    description='High school'
                    data='2017 - 2019'
                    link='https://www.google.com/search?q=zenaide+lopes+de+oliveira+godoy'
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

                @media (min-width: 350px) { .container ul { max-width: 60%; } }
                @media (min-width: 450px) { .container ul { max-width: 50%; } }
                @media (min-width: 550px) { .container ul { max-width: 40%; } }
                @media (min-width: 650px) { .container ul { max-width: 30%; } }
                @media (min-width: 750px) { .container { align-items: flex-start; } .container ul { max-width: 100%; } }
            `}</style>
        </div>
    )
}