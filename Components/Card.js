import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
    return <>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1643483700397-4f265612c7bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className={styles.cardImg} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{props.title}</h2>
                <span className={styles.cardPrice}>{props.price}</span>
            </div>
        </div>
    </>;
}
