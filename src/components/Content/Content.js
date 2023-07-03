import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './content.css';
import phone from './phone.png';

export default function Content() {
  useEffect(() => {
    const images = document.querySelectorAll('.phone');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    images.forEach((image) => {
      observer.observe(image);
    });
  }, []);

  return (
    <div className='combined-component'>
      <div className='content'>
        <div className='con1'>
          <p style={{fontSize:'50px'}}>
            Introducing <strong className='name'>ElevateX<sub className='name'>2</sub></strong>
          </p>
        </div>
        <div className='con2'>
          <h4>Redefining Mobile Technology for a Connected World</h4>
        </div>
        <div className='con3 my-4'>
          <Link to='/' className='btn1'>
            Order now
          </Link>
        </div>
      </div>
      <div className='phone'>
        <img src={phone} alt='PhoneLogo' />
      </div>
    </div>
  );
}
