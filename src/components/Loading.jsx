import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../utils/css/loading.css'

export const Loading = () => {
  return (
    <div className="loading-panel">
        <div className="loading-box"></div>
        <div className="loading-box"></div>
        <div className="loading-box"></div>
        <div className="loading-box"></div>
        <div className="loading-box"></div>
        <div className="loading-box"></div>
    </div>
  )
}

export const LoaderIcon=()=>{
  return(
    <div className='loader-icon'>
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  )
}
