import styles from '../../styles/About.module.css'
import Head from 'next/head';

export default function index() {
    return <>
        <Head>
            <title>About - Saran Stationery and Gift Shop</title>
            <meta name="description" content="Saran stationery, a gift shop, we provide you with the best quality products online." />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8587609475493832"
                crossOrigin="anonymous"></script>
        </Head>
        <div className={styles.banner}>
            <div className={styles.wrapper}>
                <h2>About Us</h2>
            </div>
        </div>
        <div className={styles.content}>
            <h2 className={styles.citle}>Welcome</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda laborum. Unde modi molestiae impedit dolores veritatis, vitae dicta eveniet totam tenetur iste est ex placeat libero illum fuga eaque?</p>
        </div>
    </>;
}
