import React, { useEffect, useRef } from 'react';
import './feat.css';
import back from './back.png';
import Camera from './Camera.jpg'
import Battery from './Battery.jpg'
import Proc from './proc.jpg'

export default function Feat(props) {
  const featureSectionRef = useRef(null);

  useEffect(() => {
    if (props.scrollToFeatures) {
      featureSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.scrollToFeatures]);

  useEffect(() => {
    const words = document.querySelectorAll('.Featimg1');
    const words3 = document.querySelectorAll('.Featimg2');
    const words4 = document.querySelectorAll('.Featimg3');
    const words7 = document.querySelectorAll('.Featimg4');
    const words1 = document.querySelectorAll('.featDesc1');
    const words2 = document.querySelectorAll('.featDesc2');
    const words5 = document.querySelectorAll('.featDesc3');
    const words6 = document.querySelectorAll('.featDesc4');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
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

    words.forEach(word => {
      observer.observe(word);
    });

    words1.forEach(word => {
      observer.observe(word);
    });

    words2.forEach(word => {
      observer.observe(word);
    });

    words3.forEach(word => {
      observer.observe(word);
    });

    words4.forEach(word => {
      observer.observe(word);
    });

    words5.forEach(word => {
      observer.observe(word);
    });

    words6.forEach(word => {
      observer.observe(word);
    });

    words7.forEach(word => {
      observer.observe(word);
    });

  }, []);

  return (
    <div className="feat">
      <h2 className="name1 feath1" style={{ textAlign: 'center'}}>
        <span style={{ fontSize: '50px' }}>"U</span>nleash Your Potential with
        <span className="name1" style={{ fontWeight: 'bolder' }}> ElevateX2</span>:
      </h2>
      <h2 className="name1 feath1">
        <span className="name1" style={{ fontWeight: 'bolder' }}>Experience</span> the Cutting-Edge Features and
      </h2>
      <h2 className="name1 feath1" style={{ textAlign: 'end' }}>
        Unparalleled Performance of <span className="name1" style={{ fontWeight: 'bolder' }}>Our</span>
      </h2>
      <h2 className="name1 feath1">
        Revolutionary New Mobile <span className="name1" style={{ fontWeight: 'bolder' }}>Phone</span>
        <span style={{ fontSize: '50px' }}>"</span>
      </h2>
      <svg className="feath2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" ref={featureSectionRef}>
        <rect className="rectangle" x="60" y="60" width="120" height="80" stroke="url(#grad)" />
        <text className="text" x="115" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="24">Features</text>
      </svg>
      <div className="img1">
        <img src={back} className="Featimg1" alt="Phone" />
      </div>
      <div className="featDesc1">
        <p><p className='p1'>Stunning Display:</p>
          Immerse yourself in vibrant visuals and stunning clarity on the ElevateX2's expansive Full HD+ display.
          Whether you're streaming videos, browsing photos, or playing games, every detail comes to life with rich colors and sharpness.</p>
      </div>
      <div className="featDesc2">
        <p><p className='p2'>High-Performance Processor:</p>
          Powered by a lightning-fast octa-core processor, the ElevateX2 delivers seamless multitasking and efficient performance.
          Enjoy smooth app navigation, fast loading times, and responsive interactions for an unparalleled user experience.</p>
      </div>
      <div className="img2">
        <img src={Proc} className="Featimg2" alt="Phone" style={{objectFit:'contain'}}/>
      </div>
      <div className="img3">
        <img src={Camera} className="Featimg3" alt="Phone" style={{objectFit:'contain'}}/>
      </div>
      <div className="featDesc3">
        <p><p className='p3'>Capture Every Moment:</p>
          Unleash your inner photographer with the ElevateX2's advanced camera system. Capture stunning photos with the high-resolution camera,
          and take breathtaking selfies with the front-facing camera. With various shooting modes and AI enhancements, every shot is a masterpiece.</p>
      </div>
      <div className="featDesc4">
        <p><p className='p4'>Extended Battery Life:</p>
          Stay connected all day long with the ElevateX2's long-lasting battery. Whether you're browsing the web, streaming media, or
          using resource-intensive apps, the phone's efficient power management ensures you never run out of juice..</p>
      </div>
      <div className="img4">
      <img src={Battery} className="Featimg4" alt="Phone" style={{objectFit:'contain'}}/>
      </div>
    </div>
  );
}

