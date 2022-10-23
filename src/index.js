/* React basic */
import {  StrictMode  } from 'react';
import {  createRoot  } from 'react-dom/client';
import {  HashRouter  } from 'react-router-dom';

/* Styles */
import './styles/global.css';
import './styles/Swiper.scss';
import './styles/HoverCursor.scss';
import './styles/specialStyles.scss';

/* Swiper Style */
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/* Components */
import App from './App';
import LoadFont from './api/LoadFont';
import reportWebVitals from './reportWebVitals';
import initializeFirebase from './api/Firebase';




// Initialize font and firebase
LoadFont();
initializeFirebase();





const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>


      <App />
    
    
    </HashRouter>
  </StrictMode>
);

reportWebVitals();