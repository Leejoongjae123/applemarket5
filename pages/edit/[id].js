import React from 'react';
import {useEffect, useState} from 'react'
import {dbService} from '../../src/firebase'
import { useRouter } from 'next/router'
import {query as fbquery, addDoc,collection, doc, getDocs,query,onSnapshot,orderBy,where,deleteDoc,updateDoc} from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Edit () {
  
  const router = useRouter()
  const { id } = router.query

  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  const [price,setPrice]=useState("")
  const [postId,setPostId]=useState("")

  const [show,setShow]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange= (event)=>{
    if(event.target.id==="title"){
      let text=event.target.value;
      setTitle(text);
    } else if(event.target.id==="content") {
      let text=event.target.value;
      setContent(text);
    } else {
      let text=event.target.value;
      setPrice(text)
    }
  }
  
  const handleClick= async ()=>{
    const q = fbquery(collection(dbService, "product"),where("제목", "==", id));
    const querySnapshot = await getDocs(q);
    const postId=querySnapshot.docs[0].id
    console.log(postId)
    const changeTextRef = doc(dbService, "product",postId);
    let result= await updateDoc(changeTextRef,{제목:title,가격:price})
    console.log("수정완료")
    handleShow()


  }
  

  return (
    <div>
      <div>
        <div className="container mt-3">
          <input onChange={handleChange} type="text" className="form-control mt-2" id="title" placeholder="title" value={title}/>
          <input onChange={handleChange} className="form-control mt-2" id="content" value={content} placeholder="content"/>
          <input onChange={handleChange} type="text" className="form-control mt-2" id="price" placeholder="price" value={price}/>
          <button onClick={ ()=>{handleClick()} } className="btn btn-danger mt-3" id="send">수정하기</button>
        </div>      
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>알림창</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          상품이 수정 완료 되었습니다.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>     
    </div>
  );
}
