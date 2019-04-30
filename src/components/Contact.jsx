import React from 'react';
import GoogleMap from './GoogleMap';

function Contact(){
  return(
    <div className='contact'>
      <h1>Contact Us</h1>
      <h2>Hours: Noon-Midnight</h2>
      <h2>503-555-1234</h2>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-foursquare"></i>
      <div className='address'>
        <h3>123 N Hops St</h3>
        <h3>Portland, OR 97205</h3>
      </div>
        <GoogleMap/>
    </div>
  )
}

export default Contact;
