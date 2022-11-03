export const Social = () => {
    return (
        <div className='container'>
            <h2>Social</h2>
            <div translate='no'>
                <a href='https://github.com/NyctibiusVII'>
                    <i className='bx bxl-github bx-xs' />
                    @NyctibiusVII
                </a>

                <a href='https://www.linkedin.com/in/matheus-vidigal-nyctibiusvii'>
                    <i className='bx bxl-linkedin-square bx-xs' />
                    @matheus-vidigal-nyctibiusvii
                </a>

                {/* <a href='https://www.instagram.com/nyctibius_vii'>
                    <i className='bx bxl-instagram-alt bx-xs' />
                    @nyctibius_vii
                </a> */}
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                a {
                    display: flex;
                    align-items: center;

                    gap: 0.5rem;
                }



                /* Desktop */
                @media (min-width: 750px) { .container { align-items: flex-start; } }
            `}</style>
        </div>
    )
}