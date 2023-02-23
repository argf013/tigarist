import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NoPage() {
  useEffect(() => {
    document.title = '404 - Not Found';
  }, []);

  return (
    <div className="mx-auto text-center" style={{ marginBottom: '500px' }}>
      <h1 className="text-center mt-5">404 Not Found</h1>
      <Link to="/"><Button variant="dark" className="mt-2">Back</Button></Link>

    </div>
  );
}

export default NoPage;
