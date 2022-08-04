import React from 'react';
import {useEffect, useState} from 'react'
import {authService} from '../src/firebase';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,GithubAuthProvider,updateProfile} from 'firebase/auth'
import { AuthError } from 'firebase/auth';
import Login from '../src/components/Login'
export default function login () {

  return (
    <div>
      <Login></Login>
    </div>
  );
}
