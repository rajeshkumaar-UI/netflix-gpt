import React, { useEffect } from 'react';
import {auth} from '../utils/firebase';
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged} from "firebase/auth"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate('/browse');
            // ...
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate('/');
          }
      })
  }, [navigate, dispatch]);

  return (
    <div className='absolute px-8 py-2 z-10 flex justify-between w-screen'>
        <img className='w-48' src="images/dummy-logo.png" alt="Logo"></img>
        { user && (
          <div className='flex gap-2 items-center'>
          <img className='w-10 rounded-full' src={user.photoURL} alt="Logo"></img>
          <button onClick={handleLogout} className='bg-gray-500 text-blue-950 font-bold p-3 rounded-md '>Logout</button>
        </div>
        )}
        
    </div>
  )
}

export default Header