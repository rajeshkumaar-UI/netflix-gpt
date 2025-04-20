import React, { useState, useRef } from 'react'
import Header from './Header'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'

import checkValidateData from '../utils/validate';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmitButton = () => {
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidateData(!isSigninForm ? name.current.value : null, email.current.value, password.current.value);
        setErrorMessage(message);
        console.log('message', message);
        if(message) return;
        if(!isSigninForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/187245648?s=400&u=9603e0ec0f673602eb09ee51d8a83c26f96d99bf&v=4"
                  }).then(() => {
                    // Profile updated!
                    // ...
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+'-'+errorMessage);
                // ..
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+'-'+errorMessage);
            });
        }
    }
    const toggleSignInForm = () => {
        setIsSigninForm(!isSigninForm);
    }
  return (
    <div className='relative min-h-screen'>
        <Header />
        <div className='absolute min-w-full min-h-screen'>
            <img className='min-w-full min-h-screen' src="images/home_banner.jpg" alt="banner" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-70 z-10 text-white p-12'>
            <h1 className='font-bold text-3xl mb-3'>
                {isSigninForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSigninForm && (
                <input ref={name} type="text" placeholder='Name' className='p-2 mb-5 w-full rounded-md bg-transparent font-white border-px0625 border-grayCustom'/>
            )}
            <input ref={email} type="text" placeholder='Email address' className='p-2 mb-5 w-full rounded-md bg-transparent font-white border-px0625 border-grayCustom'/>
            <input ref={password} type="password" placeholder='Password' className='p-2 mb-5 w-full rounded-md bg-transparent font-white border-px0625 border-grayCustom'/>
            <p className='text-red-500 font-400 text-lg py-2'>{errorMessage}</p>
            <button className='p-3 bg-red-700 w-full mb-5 rounded-lg' onClick={handleSubmitButton}>
            {isSigninForm ? "Sign In" : "Sign UP"}
            </button>
            <p>
                <span>{isSigninForm ? "New to Website?" : "Already registered?"}</span>
                <span onClick={toggleSignInForm} className='font-bold text-white cursor-pointer pl-2'>
                    {isSigninForm ? "Sign up now" : "Sign In now"}
                </span>
            </p>
        </form>
    </div>
  )
}

export default Login