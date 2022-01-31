import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import { getDatabase, ref, get, onValue } from 'firebase/database'
import { useEffect, useState } from 'react'
const app = require('../Services/firebase')
import Head from 'next/head'
import Image from 'next/image'
import blank from '../public/blank.jpg'



export default function Home() {
  const [products, setProducts] = useState([])
  const [banner,setBanner] = useState('')

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const database = getDatabase(app)
    const databaseRef = ref(database, 'products/')
    const bannerRef = ref(database, 'banner')
    onValue(bannerRef,(snapshot) => {
      setBanner(snapshot.val());
    })
    onValue(databaseRef, (snapshot) => {
      snapshot.forEach(snap => {
        console.log(snap.val());
        setProducts(products => [...products,snap.val()])
      })
    },{onlyOnce:true})
  }
  return (
    <>
    <Head>
      <title>Home | Saran Stationery</title>
      <meta name='description' content='Satationery Shop, Best Stationery Items, get your favourite stationery items'></meta>
    </Head>
      <div className={styles.banner}>
        <Image priority layout='fill' src={banner==""?blank:banner} alt=""/>
        <div className={styles.bannerCnt}>
          <h2 className={styles.bitle}>Welcome to StudyWays</h2>
          <p className={styles.bext}>The best selling notebooks are build here.</p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Products</h2>
        <div className={styles.grid}>
          {products.map((product,i) => {
            return <Card title={product.title} image={product.image} price="Rs. 20" key={i} />
          })}
        </div>
      </div>
    </>
  )
}
