export const Social = () => {
    return (
        <div className='container'>
            <h2>Social</h2>
            <div>
                <p><i className='bx bxl-linkedin-square bx-xs' />@matheus-vidigal-nyctibiusvii</p>
                <p><i className='bx bxl-github bx-xs'          />@NyctibiusVII</p>
                <p><i className='bx bxl-instagram-alt bx-xs'   />@nyctibius_vii</p>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                p {
                    display: flex;
                    align-items: center;

                    gap: 0.5rem;
                }

                @media (min-width: 750px) { .container { align-items: flex-start; } }
            `}</style>
        </div>
    )
}