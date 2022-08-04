import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductList from '../src/components/ProductList'

export default function Home() {
  return (
    <div>
      <ProductList></ProductList>
    </div>
  )
}
