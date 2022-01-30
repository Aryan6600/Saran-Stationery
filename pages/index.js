import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { useEffect, useState } from 'react'
const app = require('../Services/firebase')



export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async(data) => {
    const database = getDatabase(app)
    const databaseRef = ref(database, 'products/')
    onValue(databaseRef, (snapshot) => {
      snapshot.forEach(snap => {
        setProducts([...products, snap.val()])
      })
    })
  }
  return (
    <>
      <div className={styles.banner}>
        <h2 className={styles.bitle}>Welcome to StudyWays</h2>
        <p className={styles.bext}>The best selling notebooks are build here.</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Products</h2>
        <div className={styles.grid}>
          {products.map((product,i) => {
            console.log(product);
            return <Card title={product.title} price="Rs. 20" key={i} />
          })}
        </div>
      </div>
    </>
  )
}
