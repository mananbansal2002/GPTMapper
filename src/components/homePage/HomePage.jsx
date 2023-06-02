import React from 'react'
import './homePage.css'
import Header from '../header/Header'
import SingleGalleryItem from './SingleGalleryItem'
import Footer from '../footer/Footer'
import '../passion/passion.css'
import IMG1 from '../../assets/roadm.jpg'
import IMG2 from '../../assets/roadm2.jpg'
import IMG3 from '../../assets/roadm3.jpg'
import IMG4 from '../../assets/roadm4.jpg'
import IMG5 from '../../assets/roadm5.jpg'
import IMG6 from '../../assets/roadm6.jpg'

const HomePage = () => {
  return (
    <>
    <Header/>
    <div className='home-area'>
    <div className='big-container'>
        <div className='middle-container'>
            <div className='small-container'>
                <h2>Hello, <br/> Need Guidance?</h2>
                <p>You reached the right place. We provide instant roadmaps essential to ace your career.</p>
                <div btn-container >
                <input className='btn-1' placeholder="Enter Topic"/>
                <a href='#' className='btn-2' >Get</a>
              </div>
          </div>
        </div>
      </div>
      <div className='roadmap_samples_container'>
          <div className='left-side'>
            <h3>Roadmap Samples</h3>
          </div>
          <div className='roadmap_samples_block'>
            <SingleGalleryItem IMG={IMG1}/>
            <SingleGalleryItem IMG={IMG2}/>
            <SingleGalleryItem IMG={IMG3}/>
            <SingleGalleryItem IMG={IMG4}/>
            <SingleGalleryItem IMG={IMG5}/>
            <SingleGalleryItem IMG={IMG6}/>
        
          </div>
          <div className='view_more'>
            <div className='view-more-inner'>
              <a href='#' className='btna'>View More</a>
            </div>
          </div>

      </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default HomePage
