import React, { useState, useEffect } from 'react';
import "./login.css";
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
  
function Main() {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/details');
    }
  }, [user]);

  return (
    <div className='login'>
      <h1 className='signIn'>Sign in</h1>
      <div className='button'>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
    </div>
  );
}
export default Main;