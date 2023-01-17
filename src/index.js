import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/badge.css';
import './styles/index.css';
import './styles/navibar.css';
import './styles/snow.css';
import './styles/App.css';
import './styles/Songs.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Song1 from './pages/Song1';
import Layout from './pages/Layout';
import Song2 from './pages/Song2';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="song1" element={<Song1 />} />
          <Route path="song2" element={<Song2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorkerRegistration.register();

