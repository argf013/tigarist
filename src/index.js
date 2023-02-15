/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/badge.css';
import './styles/index.css';
import './styles/navibar.css';
import './styles/snow.css';
import './styles/Songs.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Home from './pages/Home';
import Song1 from './pages/Song1';
import Layout from './pages/Layout';
import Song2 from './pages/Song2';
import ScrollToTop from './utils/ScrollToTop';
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="song1" element={<Song1 />} />
          <Route path="song2" element={<Song2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorkerRegistration.unregister();
