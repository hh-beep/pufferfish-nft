/* React basic */
import {  StrictMode  } from 'react';
import {  createRoot  } from 'react-dom/client';
import {  HashRouter  } from 'react-router-dom';
import WebFont from 'webfontloader';


/* Styles */
import './styles/global.css';
import './styles/Swiper.scss';
import './styles/HoverCursor.scss';


/* Components */
import App from './App';
import reportWebVitals from './reportWebVitals';
import initializeFirebase from './api/Firebase';




WebFont.load({
  google: {
    families: [  "Inter"  ]
  }
})


initializeFirebase()



const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);



reportWebVitals();
