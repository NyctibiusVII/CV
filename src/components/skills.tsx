export const Skills = () => {
    return (
        <div className='container'>
            <h2>Skills</h2>
            <div>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                    <li>Github</li>
                </ul>

                <ul>
                    <li>NextJS</li>
                    <li>Sass</li>
                    <li>Typescript</li>
                    <li>Git</li>
                </ul>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container div {
                    padding-left: 2rem;

                    display: flex;

                    gap: 2rem;
                }

                @media (min-width: 750px) { .container { align-items: flex-start; } .container div { padding-left: 1.5rem; } }
            `}</style>
        </div>
    )
}