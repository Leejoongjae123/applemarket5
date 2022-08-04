import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductList from '../src/components/ProductList'
import Login from '../src/components/Login'
import {useState,useEffect} from 'react'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { useSelector } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <Login></Login>
    </Provider>
  )
}
