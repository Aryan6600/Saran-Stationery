import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import { getDatabase, ref, get, onValue } from 'firebase/database'
import { useEffect, useState } from 'react'
import firebaseConfig from '../Services/firebase'
import { initializeApp } from 'firebase/app'
import Head from 'next/head'


export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const app = initializeApp(firebaseConfig)
    const getData = async () => {
      const database = getDatabase(app)
      const databaseRef = ref(database, 'products/')
      onValue(databaseRef, (snapshot) => {
        snapshot.forEach(snap => {
          console.log(snap.key);
          let id = snap.key
          let obj = snap.val()
          obj.id = id
          console.log(obj);
          setProducts(products => [...products, obj])
        })
      }, { onlyOnce: true })
    }
    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Saran Stationery and Gift Shop</title>
        <meta name='description' content='Satationery Shop, Best Stationery Items, get your favourite stationery items,saranstationery and gift shop'></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8621388482291504"
          crossorigin="anonymous"></script>
      </Head>
      <div className={styles.banner}>
        <div className={styles.bannerCnt}>
          <h2 className={styles.bitle}>Welcome to Saran Stationery</h2>
          <p className={styles.bext}>A stationery for everyone, everywhere</p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Products</h2>
        <div className={styles.grid}>
          {products.map((product, i) => {
            return <Card title={product.title} id={product.id} image={product.image} price={product.price} key={i} />
          })}
        </div>
      </div>
    </>
  )
}
