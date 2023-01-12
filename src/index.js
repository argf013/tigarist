import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contents from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Navibar from './component/navibar';
import Carousel from './component/carousel';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navibar/>
    <Carousel/>
    <Contents/>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

