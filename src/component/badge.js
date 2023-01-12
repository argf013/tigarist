import Badge from 'react-bootstrap/Badge';
import '../badge.css'

function BasicExample() {
  return (
    <div className='heading albums' id='discography'>
      <h2>
        <Badge bg="dark">Discography</Badge>
      </h2>
    </div>
  );
}

export default BasicExample;