import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductList from '../src/components/ProductList'
import Login from '../src/components/Login'
import {useState,useEffect} from 'react'

export default function Home() {
  return (
    <div>
      <Login></Login>
    </div>
  )
}
