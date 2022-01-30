import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import React, { useState } from 'react';

export default function Navbar() {
    const toggle = () => {
        if(document.getElementById('nav').style.display =='flex')
            document.getElementById('nav').style.display = 'none'
        else
            document.getElementById('nav').style.display = 'flex'
    }
    return <>
        <nav id="navbar" className={styles.navbar}>
            <div className={styles.container}>
                <h2 className={styles.brand}>StudyWays</h2>
                <div className={styles.menu} onClick={toggle}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <div id='nav' className={styles.navigation}>
                    <Link href="/" className={styles.link}>
                        <a className={styles.navlink}>Home</a>
                    </Link>
                    <Link href="/about" className={styles.link}>
                        <a className={styles.navlink}>About</a>
                    </Link>
                    <Link href="/blog" className={styles.link}>
                        <a className={styles.navlink}>Blog</a>
                    </Link>
                </div>
                <div className={styles.action}>
                    <Link href="/">
                        <a className={styles.btn}>Purchase</a>
                    </Link>
                </div>
            </div>
        </nav>
    </>;
}
