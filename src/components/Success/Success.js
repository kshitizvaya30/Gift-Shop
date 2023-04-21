import React from 'react'
import img from '../../assets/images.jpeg'
import './Success.scss';


function Success() {
  return (
    <div className='main-container'>
      <h1>Order Placed SuccessFully !</h1>
      <img src={img} alt="success-img" />
    </div>
  )
}

export default Success