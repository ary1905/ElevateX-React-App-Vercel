import React, { useEffect, useRef }  from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import pic from './pic.png'
import pic1 from './pic2.png'
import profile from './profile.png'
import mob from './mob.png'

export default function About(props) {

  const AboutSectionRef = useRef(null);
  const ContactSectionRef = useRef(null);

  useEffect(() => {
    if (props.scrollToAbout) {
      AboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.scrollToAbout]);

  useEffect(() => {
    if (props.scrollToContact) {
      ContactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.scrollToContact]);

  return (
    <div className='Ab' ref={AboutSectionRef}>
      <svg className="feath2" xmlns="http://www.w3.org/2000/svg" viewBox="-370 -270 1000 1000" style={{ textAlign: 'center' }}>
        <text className="text" x="115" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="40" >About Us</text>
      </svg>
      <h2 className="name1 abth1" style={{ marginLeft: '8%' }}>
        <span style={{ fontSize: '50px' }}>"E</span>levateX: The Ultimate Mobile Company that Sets the
        <span className="name1" style={{ fontWeight: 'bolder' }}> Bar High!"</span>:
      </h2>
      <h2 className="name1 abth2" style={{ textAlign: 'end' }}>
        <span className="name1" style={{ fontWeight: 'bolder' }}>- John Doe,</span> Award-Winning Actor and Tech Enthusiast
      </h2>
      <div className="abttext">
        <h3>ElevateX is a mobile company that provides revolutionary solutions to industry problems.
          Join the ElevateX community and experience the benefits of company optimization today!</h3>
      </div>
      <div className="abtimg1">
        <img src={pic} alt="pic" style={{ width: '500px', height: '500px' }} />
      </div>
      <h1 className='abth1' style={{ width: '300px', textAlign: 'center', marginLeft: '40%', marginTop: '5%', fontSize: '45px' }}>Our Mission</h1>
      <h3 className='abth1' style={{ width: '900px', textAlign: 'center', marginLeft: '20%', marginTop: '5%' }}> At ElevateX,
        we are committed to providing excellent services to our customers and clients and to help them achieve the best outcomes. We believe that
        we can make a positive impact on our community, industry and the world. Our ElevateX team is dedicated to providing the best possible
        service and support, and we are always looking for ways to improve and innovate.</h3>
      <div style={{ width: '1000px', height: '1.5px', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginLeft: '16%', marginTop: '5%' }}></div>
      <h1 className='abth1' style={{ width: '300px', height: '400px', color: 'white', marginTop: '15%', marginLeft: '15%', fontSize: '55px' }}>Let's start working
        more efficiently today!</h1>
      <div className="abtimg2">
        <img src={pic1} alt="pic" style={{ width: '600px', height: '600px' }} />
      </div>
      <h1 style={{ width: '300px', textAlign: 'center', color: 'white', marginTop: '12%', marginLeft: '38%', fontSize: '45px', fontFamily: 'Allerta Stencil' }}>Team</h1>
      <h1 style={{ width: '800px', textAlign: 'center', color: 'white', marginTop: '1%', marginLeft: '23%', fontSize: '30px', fontFamily: 'Allerta Stencil' }}>Meet the people behind our magical product</h1>
      <div className="teamimg">
        <img src={profile} alt="profile" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
      </div>
      <h2 style={{ marginRight: '2.7%', textAlign: 'center', fontFamily: 'Allerta Stencil', color: 'white' }}>Aryan Singh<h5>Front End Develepor</h5></h2>
      <div className="join">
        <div className="jotex">
          <h1>Get started with ElevateX today</h1>
          <h4 style={{ color: 'white', fontSize: '20px', marginTop: '5%', textAlign: 'center' }}>Start optimizing your processes today.</h4>
          <div className="abtn">
            <Link to='/' className='btn2'>Sign up now</Link>
          </div>
        </div>
        <div className="joimg">
          <img src={mob} alt="mobile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
        </div>
      </div>
      <div className="foot" ref={ContactSectionRef}>
        <h1 style={{ color: 'white', fontFamily: 'Allerta Stencil', paddingTop: '2%', marginLeft: '12%' }}>ElevateX</h1>
        <h6 style={{ color: 'white', fontFamily: 'Allerta Stencil', paddingTop: '1%', marginLeft: '12%' }}>Copyright © 2023.</h6>
        <h6 style={{ color: 'white', fontFamily: 'Allerta Stencil', paddingTop: '1%', marginLeft: '12%' }}>All Rights Reserved.</h6>
        <ul className="sci my-2">
          <li>
            <a href="https://www.facebook.com/aryan19may" target='blank'><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="https://twitter.com/LonerWeeb_1905" target='blank'><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aryan-singh-394910250/" target='blank'><i className="fab fa-linkedin-in"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/aryan_singh0519/" target='blank'><i className="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
