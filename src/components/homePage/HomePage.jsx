import React, { useEffect, useState } from 'react';
import './homePage.css';
import Header from '../header/Header';
import SingleGalleryItem from './SingleGalleryItem';
import Footer from '../footer/Footer';
import IMG1 from '../../assets/roadm.jpg';
import IMG3 from '../../assets/roadm3.jpg';
import IMG4 from '../../assets/roadm4.jpg';
import IMG5 from '../../assets/roadm5.jpg';
import IMG6 from '../../assets/roadm6.jpg';
import Tree from '../../assets/roadm.jpg';

const HomePage = () => {
    
  function base64ToBlob(base64String) {
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
      const slice = byteCharacters.slice(offset, offset + 1024);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: 'image/jpeg' }); // Set the appropriate image type here
  }

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchPhotoData(s) {
      const response = await fetch('http://localhost:3000/getRoadmap?topic="{s}"', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      const data = await response.json();
      const blob = base64ToBlob(data.photo);
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    }

    fetchPhotoData();
  }, []);
  


  return (
    <>
      <Header />
      <div className="home-area">
        <div className="big-container">
          <div className="middle-container">
            <div className="small-container">
              <h2>Hello, <br/> Need Guidance?</h2>
              <p>You reached the right place. We provide instant roadmaps essential to ace your career.</p>
              <div className="btn-container">
                <input className="btn-1" placeholder="Enter Topic" />
                <button className="btn-2">Get</button>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap_samples_container">
          <div className="left-side">
            <h3>Roadmap Samples</h3>
          </div>
          <div className="roadmap_samples_block">
            <SingleGalleryItem IMG={IMG1} />
            <SingleGalleryItem IMG={imageUrl} />
            <SingleGalleryItem IMG={IMG3} />
            <SingleGalleryItem IMG={IMG4} />
            <SingleGalleryItem IMG={IMG5} />
            <SingleGalleryItem IMG={IMG6} />
          </div>
          <div className="view_more">
            <div className="view-more-inner">
              <a href="#" className="btna">View More</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
