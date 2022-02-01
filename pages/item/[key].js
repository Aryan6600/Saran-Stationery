import { useRouter } from 'next/router'
import { getDatabase, ref, child, get } from 'firebase/database'
import firebaseConfig from '../../Services/firebase'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Item.module.css'
import image from '../../public/blank.jpg'
import { initializeApp } from "firebase/app";
import Head from 'next/head'


export default function Item() {

    const [data, setData] = useState()
    const router = useRouter()
    const key = router.query
    useEffect(() => {
        console.log("key:", key.key);
        const app = initializeApp(firebaseConfig)
        console.log('component mounted', app);

        const dbRef = ref(getDatabase());
        get(child(dbRef, `products/${key.key}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setData(snapshot.val())
            } else {
                router.push('/')
            }
        }).catch(() => {
            router.push('/')
        });
    }, [key])

    return (
        <>
            <Head>
                <title>{data ? data.title : "Loading.."} - Saran Stationery</title>
                <meta name="description" content={data ? data.description : "Saran Stationery, gift shop,get best quality stationery items,pen,pencils etc."} />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8621388482291504"
                    crossorigin="anonymous"></script>
            </Head>
            <div className={styles.content}>
                <div className={styles.product}>
                    <Image width='500' quality='10' height='400' alt="" src={data ? data.image : image} />
                    <div className={styles.protent}>
                        <h2>{data ? data.title : "Loading..."}</h2>
                        <span>&#8377; {data ? data.price : "Loading..."} per peice</span>
                        <input placeholder='Quantity' type="number" className={styles.input} />
                        <input type="submit" value="Buy Now" className={styles.btn} />
                    </div>
                </div>
                <div className={styles.productDesc}>
                    <h2>About This Product</h2>
                    <p>{data ? data.description : "Loading..."}</p>
                </div>
            </div>
        </>
    );
}

