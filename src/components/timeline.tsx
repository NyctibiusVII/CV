/* Import ---------------------------------------------------------------------- */ // - x70

import Link from 'next/link'

import styles from '../styles/components/timeline.module.scss'

/* ---------------------------------------------------------------------- */

interface TimelineProps {
    title:           string
    titleAttribute?: string
    description:     string
    data:            string
    link:            string
    context:         'education' | 'experience'
    last?:           boolean
}

export const Timeline = (props: TimelineProps) => {
    return (
        <li className={`${styles.container} ${props.last ? styles.last : ''}`}>
            <h3 title={props.titleAttribute}>
                <Link href={props.link}><a target='_blank'>{props.title}</a></Link>
            </h3>
            { props.context === 'education' ?
                <>
                    <p>{props.description}</p>
                    <small>{props.data}</small>
                </>
                :
                <>
                    <small>{props.data}</small>
                    <p>{props.description}</p>
                </>
            }
        </li>
    )
}