import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
import {query as fbquery, addDoc,collection, doc, getDocs,query,onSnapshot,orderBy,where} from 'firebase/firestore'
import {dbService} from '../../src/firebase'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  const getDetail=async ()=>{
    const q = fbquery(collection(dbService, "product"),where("제목", "==", id));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    //   });
  }

  useEffect(() => {
    getDetail()
  }, []);


  return (
    <div className="container">
        <div className="detail-pic my-4"></div>
        <div>
          <h5>올린사람 : 모름</h5>
          <hr/>
          <h5 className="title">상품명</h5>
          <img src="" alt="" />
          <p className="date">올린날짜</p>
          <p className="price">가격</p>
        </div>
    </div>    
  )
}

export default Post