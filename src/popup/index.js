import React from 'react';
import './css.css'
function popup({children}) {
  return( 
  <section className="popupSpace">
    <div className='popup'>
        {children}
    </div>
  </section>
  )
}

export default popup;
