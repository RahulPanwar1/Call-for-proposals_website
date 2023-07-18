import React from 'react';
import "./about.css";
function About(){
    return (
        <>
          <div>
            <div className='main'>
              <div className='about'>
                <h2>Who are we</h2>
              </div>
              <hr className='line' />
        
              <div className="container">
                <div className="text">
                  <h1 >Building greater futures through innovation and collective knowledge</h1>
                  <p style={{fontSize:"1.3rem"}}>We are a team of passionate individuals who believe in making job opportunities accessible for everyone. Our mission is to collect information about all job opportunities available on Google and provide it in one place for the convenience of job seekers.</p>
                </div>
                <div className="image">
                  <img src={require('../images/about.jpeg')} alt="example" />
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default About;