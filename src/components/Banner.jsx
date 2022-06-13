import React from 'react'
import banner from '../assets/PG_banner1.jpg'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='grid'>
        <div>
          <img src={banner} alt='PG_banner1' />
        </div>
      </div>
    </section>
  )
}

export default Banner
