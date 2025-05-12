import React from 'react'
import { API_OPTIONS } from '../utils/constants'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='pr-2 flex-none'>
        <img alt="Movie Card" src={IMG_CDN+''+posterPath} />
    </div>
  )
}

export default MovieCard