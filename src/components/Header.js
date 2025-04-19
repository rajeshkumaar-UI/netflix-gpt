import React from 'react';
import {auth} from '../utils/firebase';
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
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