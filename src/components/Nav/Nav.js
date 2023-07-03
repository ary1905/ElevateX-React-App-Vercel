import React from 'react';
import logo from './logo_transparent.png';
import './Nav.css';

export default function Nav(props) {
    const handleFeaturesClick = (event) => {
        event.preventDefault();
        props.setScrollToFeatures(true);
    };

    const handleAboutClick = (event) => {
        event.preventDefault();
        props.setScrollToAbout(true);
    };

    const handleContactClick = (event) => {
        event.preventDefault();
        props.setScrollToContact(true);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" className="logo" style={{ width:'250px', height:'125px',  }} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft:'520px'}}>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <h5 className="mx-3">Home</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={handleFeaturesClick}>
                                <h5 className="mx-3">Features</h5>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={handleAboutClick}>
                                <h5 className="mx-3">About Us</h5>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={handleContactClick}>
                                <h5 className="mx-3">Contact Us</h5>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
