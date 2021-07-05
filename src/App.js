
import './App.css';
import {Col,Container,Row,Card} from 'react-bootstrap';
import Vikings from './Vikings.jpg';
function App({movies}) {
  return (
    <div className="App">
     <Container className="contact-content debug-border pt-5 login"  >
           
           <Row className="justify-content-center " >       
                <Col >
                <Card>
                <Card.Img variant="top" src={Vikings} xs="3" md="2" />
                {movies.map(movie=><Card.Body>

<Card.Title> {movie.title}</Card.Title>
<Card.Text>
{movie.description}
</Card.Text>
 
<Card.Text>

  {movie.trailer}

</Card.Text>

       
</Card.Body>)}
</Card>
       </Col>
       
</Row>  
</Container>
    </div>
  );
}

export default App;
