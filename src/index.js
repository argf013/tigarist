/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/index.css';
import data from './DATA.json';

const Home = lazy(() => import('./pages/Home'));
const Songs = lazy(() => import('./pages/Songs'));
const Layout = lazy(() => import('./pages/Layout'));
const NoPage = lazy(() => import('./pages/NoPage'));

function App() {
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
            {Object.entries(data).map(([, artistData]) => Object.entries(artistData).map(([, songData]) => (
              <Route
                key={songData.id}
                path={`song/${songData.id}`}
                element={<Songs songId={songData.id} />}
              />
            )))}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

      </Suspense>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.register();
