import React from 'react';

function GoogleMap() {
  return(
      <div className='mapouter'>
        <div class='gmap_canvas'>
          <iframe id='gmap-canvas' src='https://maps.google.com/maps?q=portland%20or&t=&z=15&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='yes' marginheight='0' marginwidth='0'>
          </iframe>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
        </div>
      </div>
    )
  }


export default GoogleMap;
