import React from 'react';
import {useEffect, useState} from 'react'
import {addDoc,collection, doc, getDocs,query,onSnapshot,orderBy} from 'firebase/firestore'
import {dbService} from '../firebase'
import styles from './ProductList.module.css'
import Image from 'next/image'

export default function ProductList () {
  const [products,setProducts]=useState([])

  const getProducts=async ()=>{
    
    const q=query(collection(dbService,"product"))
    const querySnapshot=await getDocs(q);
    if (products.length===0){
      querySnapshot.forEach((doc)=>{
        setProducts((prev)=>[doc.data(),...prev])
      })
    }
  }

  useEffect(() => {
    getProducts()
  }, []);  
  
  
  return (
    <div>
      {products.map((elem,index)=>{
        return (
        <div className="container mt-3" style={{backgroundColor:"#eee",borderRadius:"20px"}} key={index}>
          <div className={styles.product}>
            {/* <div className="thumbnail" style="background-image: url('https://via.placeholder.com/350')"></div> */}
            <div className={styles.thumbnail}>
              <img className={styles.thumbnail__img} src={elem.URL} alt='' />
            </div>
            <div className={styles.contents}>
              <h5 className="title">{elem.제목}</h5>
              <p className="date">{elem.게시일}</p>
              <p className="price">{elem.가격}원</p>
              <p className="float-end">♡0</p>
              <button className='btn btn-danger my-3'>삭제</button>
            </div>
          </div>
        </div>  
        )
      })}      
    </div>
  );
}
