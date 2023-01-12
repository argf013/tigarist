import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'

const Cards = (props) => {
  return (
    <Card className='bg-light'>
      <Card.Img variant="top"  src={props.img} placeholder={props.phd} />
      <Card.Body>
        <Card.Title style={{color: "black"}}>{props.title}</Card.Title>
        <Card.Text style={{color: "black"}}>
        {props.desc}
        </Card.Text>
        <Button href={props.href} target="_blank" variant="dark">Listen</Button>{''}
      </Card.Body>
    </Card>
  );
}
export default Cards;