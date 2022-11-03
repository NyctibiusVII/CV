/* Import ---------------------------------------------------------------------- */ // - x70

import { useTheme } from 'next-themes'

import { DownloadPdf }  from '../components/downloadPdf'
import { ThemeChanger } from '../components/themeChanger'

import profileImage from '../../public/profile.png'

import Image from 'next/image'

import styles from '../styles/components/profile.module.scss'

/* ---------------------------------------------------------------------- */

export const Profile = () => {
    const { theme } = useTheme()

    const profileClassName = [styles.profileImage, styles[theme ?? 'light']].join(' ')

    return (
        <header className={styles.container}>
            <div className={styles.innerHeader}>
                <DownloadPdf />
                <ThemeChanger />
            </div>

            <div className={profileClassName}>
                <Image
                    src={profileImage}
                    alt="Profile photo"
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

            <div className={styles.datas} translate='no'>
                <p><i className='bx bx-map bx-xs'      />São Paulo - SP</p>
                <p><i className='bx bx-envelope bx-xs' />matheus.dev.07@gmail.com</p>
                <p><i className='bx bx-phone bx-xs'    />(11) 97132-1587</p>
            </div>
        </header>
    )
}