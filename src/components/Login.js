import React from 'react';
import {useEffect, useState} from 'react'
import {authService} from '../firebase';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,GithubAuthProvider,updateProfile,signOut} from 'firebase/auth'
import { AuthError } from 'firebase/auth';
import { useDispatch,useSelector } from 'react-redux';
import { changeLoggedIn } from '../store/store';
import ProductList from './ProductList';
import GNB from './GNB';
export default function login () {
  const {loggedIn}=useSelector((state)=>{return state})
  let dispatch=useDispatch()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const onChange=(event)=>{
    const {target:{id,value}}=event;
    if(id==="email-new"){
      setEmail(value);
      console.log(value)
    } else if(id==="pw-new"){
      setPassword(value);
      console.log(value)
    } else if(id==="name-new"){
      setName(value)
      console.log(value)
    }
  }
  
  const onSubmit= async (event)=>{
    if (event.target.id==="register"){
      let result=await createUserWithEmailAndPassword(authService,email,password)    
      console.log(result.user)
    } else if (event.target.id==="login") {
      let result=await signInWithEmailAndPassword(authService,email,password)
      dispatch(changeLoggedIn())
    } else {
      let result=await signOut(authService)
      
    }
  }
  return (
    <>
    {
      loggedIn===true
      ?(
        <>
        <ProductList></ProductList>
        </>
      )
      :(
        <div className="vw-100 vh-100 d-flex flex-column justify-content-center">
        <div className='my-2 w-60 mx-auto text-center fs-1'>애플 마켓에 오신것을 환영합니다!</div>
        {/* <div className="mb-3">
          <input type="text" className="form-control" placeholder="name" id="name-new" onChange={onChange} value={name}/>
        </div> */}
        <div className="my-2 w-50 mx-auto">
          <input type="email" className="form-control" placeholder="email" id="email-new" onChange={onChange} value={email}/>
        </div>
        <div className="my-2 w-50 mx-auto">
          <input type="password" className="form-control" placeholder="pw" id="pw-new" onChange={onChange} value={password}/>
        </div>
        <div className="d-flex w-50 mx-auto justify-content-between">
          <button type="submit" className="d-block btn btn-primary btn-lg" id="register" onClick={ ()=>{onSubmit(event)}}>가입</button>
          <button type="submit" className="d-block btn btn-danger btn-lg" id="login" onClick={ ()=>{onSubmit(event)}}>로그인</button>
        </div>
        {/* <button type="submit" className="btn btn-danger mx-3" id="logout" onClick={ ()=>{onSubmit(event)}}>로그아웃</button> */}
        </div>
      )
    }
    </>
  );
}
