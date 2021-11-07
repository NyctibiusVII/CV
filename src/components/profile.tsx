/* Import ---------------------------------------------------------------------- */ // - x70

import { DownloadPdf }  from '../components/downloadPdf'
import { ThemeChanger } from '../components/themeChanger'

import profileImage from '../../public/profile.jpg'

import Image from 'next/image'

import styles from '../styles/components/profile.module.scss'

/* ---------------------------------------------------------------------- */

export const Profile = () => {
    return (
        <header className={styles.container}>
            <div className={styles.innerHeader}>
                <DownloadPdf />
                <ThemeChanger />
            </div>

            <div className={styles.profileImage}>
                <Image
                    src={profileImage}
                    alt="Foto de perfil"
                    layout="responsive"
                    placeholder="blur"
                    decoding="async"
                    priority
                />
            </div>

            <h1 className={styles.name}>Matheus&nbsp;</h1>
            <p className={styles.description}>
                <code className={styles.code}>Web Developer</code>
            </p>

            <DownloadPdf />

            <div className={styles.datas}>
                <p><i className='bx bx-map bx-xs'      />R. Amador lourenço #495 - SP</p>
                <p><i className='bx bx-envelope bx-xs' />matheus.dev.07@gmail.com</p>
                <p><i className='bx bx-phone bx-xs'    />(11) 97132-1587</p>
            </div>
        </header>
    )
}