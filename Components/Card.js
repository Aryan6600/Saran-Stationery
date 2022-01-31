import React from 'react';
import styles from './Card.module.css'
import Image from 'next/image'

export default function Card(props) {
    return <>
        <div className={styles.card}>
            <Image quality='20' src={props.image} layout='responsive' width='500' height='400' alt="" />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{props.title}</h2>
                <span className={styles.cardPrice}>{props.price}</span>
            </div>
        </div>
    </>;
}
