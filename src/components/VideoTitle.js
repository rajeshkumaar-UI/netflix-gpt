import React from 'react'

const videoTitle = ({title, overview}) => {

  return (
    <div className='px-12 absolute top-0 left-0 w-screen aspect-video bg-gradient-to-r from-black flex justify-center items-center'>
        <div className='h-auto'>
            <h1 className='text-6xl font-bold text-white'>{title}</h1>
            <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
            <div>
                <button className='bg-slate-400 text-black p-3 px-10 text-lg bg-opacity-50 rounded-md'>Play</button>
                <button className='bg-slate-400 text-black p-3 px-10 text-lg bg-opacity-50 rounded-md ml-3'>MoreInfo</button>
            </div>
        </div>
    </div>
  )
}

export default videoTitle