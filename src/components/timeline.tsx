/* Import ---------------------------------------------------------------------- */ // - x70

import Link from 'next/link'

import styles from '../styles/components/timeline.module.scss'

/* ---------------------------------------------------------------------- */

interface TimelineProps {
    title:           string
    subtitle?:       string
    description:     string
    data:            string
    link:            string
    context:         'education' | 'experience'
    decoration?:     boolean
    last?:           boolean
}

export const Timeline = (props: TimelineProps) => {
    return (
        <li className={`${styles.container} ${props.decoration ? styles.decoration : ''} ${props.decoration && props.last ? styles.last : ''}`}>
            <h3 title={props.subtitle}>
                <Link href={props.link}><a target='_blank'>{props.title}</a></Link>
            </h3>
            { props.context === 'education' ?
                <>
                    <p>{props.description}</p>
                    <small className={styles.lastItem}>{props.data}</small>
                </>
                :
                <>
                    <small>{props.data}</small>
                    <strong>{props.subtitle}</strong>
                    <p className={styles.lastItem}>{props.description}</p>
                </>
            }
        </li>
    )
}