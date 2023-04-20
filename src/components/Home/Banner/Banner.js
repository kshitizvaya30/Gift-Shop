import React from 'react'
import './Banner.scss'
import BannerImg from '../../../assets/banner-img.png'

function Banner() {
  return (
    <div className='hero-banner'>
        <div className='content'>
            <div className='text-content'>
                <h1>SALES</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, aspernatur possimus ducimus illum porro itaque error rem? Dolores, cum, totam corporis necessitatibus voluptates, autem temporibus optio suscipit ullam architecto obcaecati.</p>
                <div className='call-to-actions'>
                   <div className='banner-cta'> Read More</div>
                   <div className='banner-cta v2'>Shop Now</div>
                </div>
            </div>
            <img src={BannerImg} className="banner-img" alt="bannerImg" />
        </div>
    </div>
  )
}

export default Banner