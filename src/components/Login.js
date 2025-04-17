import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSigninForm(!isSigninForm);
    }
  return (
    <div className='relative min-h-screen'>
        <Header />
        <div className='absolute min-w-screen min-h-screen'>
            <img className='min-w-screen min-h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg" alt="banner" />
        </div>
        <form className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black bg-opacity-70 z-10 text-white p-12'>
            <h1 className='font-bold text-3xl mb-3'>
                {isSigninForm ? "Sign In" : "Sign UP"}
            </h1>
            {!isSigninForm && (
                <input type="text" placeholder='Name' className='p-2 mb-5 w-full rounded-md bg-transparent font-white border-px0625 border-grayCustom'/>
            )}
            <input type="text" placeholder='Email address' className='p-2 mb-5 w-full rounded-md bg-transparent font-white border-px0625 border-grayCustom'/>
            <input type="password" placeholder='Password' className='p-2 mb-5 w-full rounded-md bg-transparent font-white border-px0625 border-grayCustom'/>
            <button className='p-3 bg-red-700 w-full mb-5 rounded-lg'>
            {isSigninForm ? "Sign In" : "Sign UP"}
            </button>
            <p>
                <span>{isSigninForm ? "New to Netflix?" : "Already registered?"}</span>
                <span onClick={toggleSignInForm} className='font-bold text-white cursor-pointer pl-2'>
                    {isSigninForm ? "Sign up now" : "Sign In now"}
                </span>
            </p>
        </form>
    </div>
  )
}

export default Login