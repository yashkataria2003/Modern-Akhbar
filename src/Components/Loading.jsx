import React from 'react'
import loading from './loading.gif'

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={loading} alt="loading" style={{hight: '4rem', height: "2rem", margin: "1rem 0rem"}}/>
    </div>
  )
}

export default Loading
