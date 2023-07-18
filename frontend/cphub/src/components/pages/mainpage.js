import React from 'react';
import './mainpage.css';

const Mainpage = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <img src={require('../images/logo2.png')} alt='Logo'/>
          <h1>Accelerate your career with Us</h1>
          <p>Make headways in the digital realm and be a game changer!</p>
        </div>
      </div>
      <h1 className='sites'>MAJOR SITES</h1>
      <hr></hr>
      <div>
        <div class="image-section">
          <div class="image-container">
            <a href='https://www.csir.res.in/newscall-proposalsannouncements-0'>
            <img src={require('../images/csir.jpeg')} alt="Image 1"/>
            </a>
          </div>
          <div class="image-container">
            <a href='https://dbtindia.gov.in/whats-new/call-for-proposals'>
            <img src={require('../images/dbt.png')} alt="Image 2"/>
            </a>
          </div>
          <div class="image-container">
            <a href='https://dst.gov.in/call-for-proposals'>
            <img src={require('../images/dst.jpeg')} alt="Image 3"/>
            </a>
          </div>
          <div class="image-container">
            <a href='https://birac.nic.in/cfp.php'>
            <img src={require('../images/BIRAC.webp')} alt="Image 4"/>
            </a>
          </div>
          <div class="image-container">
            <a href='https://main.icmr.nic.in/call%20for%20proposals'>
            <img src={require('../images/ICMR.jpg')} alt="Image 5"/>
            </a>
          </div>
          <div class="image-container">
            <a href='https://serb.gov.in/'>
            <img src={require('../images/serb.png')} alt="Image 6"/>
            </a>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Mainpage;
