import React from 'react';
import { ref } from 'firebase/storage';
import {useEffect, useState} from 'react'
import {dbService} from '../firebase'
import {addDoc,collection, doc, getDocs,query,onSnapshot,orderBy, setDoc} from 'firebase/firestore'
import { storageService } from '../firebase';
import { getDownloadURL,uploadString,uploadBytes} from 'firebase/storage';

export default function Upload () {
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState("")
  const [file,setFile]=useState("")

  const handleImage= (event)=>{
    const {target:{files}}=event;
    const theFile=files[0];
    setFile(theFile)
    const reader = new FileReader();
    reader.onloadend=(finishedEvent)=>{
      const {currentTarget:{result}}=finishedEvent
      setImage(result)
    }
    reader.readAsDataURL(theFile)
  }

  const upload= async (event)=>{

}


  const handleClick= async ()=>{
    let today=new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '년' + month  + '월' + day + '일';

    let imageUrl=""
    if (image!==""){
      const imageRef = ref(storageService, `image/${file.name}`);
      const response = await uploadString(imageRef, image, "data_url");
      console.log(response)
      imageUrl = await getDownloadURL(response.ref);
      console.log(imageUrl)
    } else{
      imageUrl=""
    }

    const docRef=await addDoc(collection(dbService,'product'),{
      제목:title,
      게시일:dateString,
      가격:price,
      URL:imageUrl
    })

    console.log("업로드완료")
  }


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


  return (
    <div>
      <div className="container mt-3">
        <input onChange={handleChange} type="text" className="form-control mt-2" id="title" placeholder="title" value={title}/>
        <input onChange={handleChange} className="form-control mt-2" id="content" value={content} placeholder="content"/>
        <input onChange={handleChange} type="text" className="form-control mt-2" id="price" placeholder="price" value={price}/>
        <input onChange={handleImage} className="form-control mt-2" type="file" id="image"/>
        <button onClick={ ()=>{handleClick()} } className="btn btn-danger mt-3" id="send">올리기</button>
        <button onClick={ ()=>{upload()} } className="btn btn-primary mt-3 mx-3" id='upload'>그림 올리기</button>
      </div>      
    </div>
  );
}
