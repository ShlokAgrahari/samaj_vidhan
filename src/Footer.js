import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div>
    <div className='footer1'>
        <img src='pmnrf_0.png'/>
        <img src='makeinindia_0.png'/>
        <img src='pg-portal.png'/>
        <img src='india-gov.png'/>
        <img src='G20_India_Logo.png'/>
    </div>
    <div className='footer2'>
          <a>Website Policies</a>
          <p>|</p>
          <a>Help</a>
          <p>|</p>
          <a>Disclaimer</a>
          <p>|</p>
          <a>Contact Us</a>
          <p>|</p>
          <a>Feedback</a>
    </div>
    <div className='footer3'>
          <p>Website is Owned and Content Managed by Ministry of Law & Justice | Government of India</p>
          <p>Designed, Developed and Hosted by National Informatics Centre( NIC )</p>
          <p>Last Updated: 23 Aug 2024</p>
    </div>
    </div>
  );
};

export default Footer;
