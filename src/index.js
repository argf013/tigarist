import React, {
  Suspense,
  lazy,
  useState,
  useEffect,
} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/index.css';

const Home = lazy(() => import('./pages/Home'));
const Songs = lazy(() => import('./pages/Songs'));
const Layout = lazy(() => import('./pages/Layout'));
const NoPage = lazy(() => import('./pages/NoPage'));

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://json.tigarist.tech/songs/');
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

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
            {data.songs && data.songs.map((songData) => (
              <Route
                key={songData.id}
                path={`song/${songData.id}`}
                element={<Songs songId={songData.id} />}
              />
            ))}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

      </Suspense>
    </Router>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <App />,
);

serviceWorkerRegistration.unregister();
