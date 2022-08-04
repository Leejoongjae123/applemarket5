import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
import {query as fbquery, addDoc,collection, doc, getDocs,query,onSnapshot,orderBy,where} from 'firebase/firestore'
import {dbService} from '../../src/firebase'
import Link from 'next/link'

const Post = () => {
  const [data,setData]=useState({})
  const router = useRouter()
  const { id } = router.query

  const getDetail=async ()=>{
    const q = fbquery(collection(dbService, "product"),where("제목", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData(doc.data())
      // console.log(doc.id, " => ", doc.data());
      });
  }

  useEffect(() => {
    getDetail()
  }, []);
  console.log(data)
  
  const handleClick= ()=>{
    
  }

  return (
    <div className="container">
        
        <div className="detail-pic my-4"></div>
        <div className='container w-100 h-70'><img className='w-100 h-100' src={data.URL} alt="" /></div>
        <div>
          <h5>올린사람 : 이중재</h5>
          <hr/>
          <h5 className="title">{data.제목}</h5>
          <img src="" alt="" />
          <p className="date">{data.게시일}</p>
          <p className="price">{data.가격}원</p>
          <Link href={`/edit/${id}`}><a><button className='btn btn-danger mt-3'>수정</button></a></Link>
        </div>
        
    </div>    
  )
}

export default Post