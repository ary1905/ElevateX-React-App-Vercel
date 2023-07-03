import React, { useEffect } from 'react'
import './phone.css'
import phone from './phone.png'


export default function Phone() {
  useEffect(() => {
    const images = document.querySelectorAll('.phone');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    images.forEach(image => {
      observer.observe(image);
    });
  }, []);

  return (
    <div className='phone'>
      <img src={phone} alt="PhoneLogo" />
    </div>
  )
}
