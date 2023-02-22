/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/index.css';

const Home = lazy(() => import('./pages/Home'));
const Song1 = lazy(() => import('./pages/Song1'));
const Layout = lazy(() => import('./pages/Layout'));
const Song2 = lazy(() => import('./pages/Song2'));
const NoPage = lazy(() => import('./pages/NoPage'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={(
        <div className="spinner-border text-center mx-auto" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      )}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="song1" element={<Song1 />} />
            <Route path="song2" element={<Song2 />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorkerRegistration.unregister();
