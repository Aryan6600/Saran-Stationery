import React from 'react';
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card(props) {
    return <>
        <Link href="/item/[key]" as={`/item/${props.id}`}>
            <a className={styles.card}>
                <Image quality='10' src={props.image} layout='responsive' width='500' height='400' alt="" />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{props.title}</h2>
                    <span className={styles.cardPrice}>&#8377; {props.price}</span>
                </div>
            </a>
        </Link>
    </>;
}
