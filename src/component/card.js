import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Outlet,Link } from 'react-router-dom';


const Cards = (props) => {
  return (
    <>
    <Card className='bg-light'>
      <Card.Img variant="top"  src={props.img} placeholder={props.phd} />
      <Card.Body>
        <Card.Title style={{color: "black"}}>{props.title}</Card.Title>
        <Card.Text style={{color: "black"}}>
        {props.desc}
        </Card.Text>
        <Button variant="dark"><Link to={props.link} className='link_to_song'>Read More</Link></Button>{''}
      </Card.Body>
    </Card>
    <Outlet />
    </>
  );
}
export default Cards;