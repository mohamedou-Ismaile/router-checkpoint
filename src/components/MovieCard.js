import React from 'react'
import {Col,Container,Row,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Vikings from '../Vikings.jpg';
const MovieCard = ({movies}) => {

    return (
        <div>
           
            <Container className="contact-content debug-border pt-5 login"  >
           
                <Row className="justify-content-center " >       
                     <Col >
                     <Card>
                     <Card.Img variant="top" src={Vikings} xs="3" md="2" />
  <Card.Body>
    <Card.Title>Movies Card</Card.Title>
    <Card.Text>
        
      The lastest Movies trailers
    </Card.Text>
    {movies.map(movie=> <Link to={`/Details/${movie.id}`}>
            <Button variant="primary" style={{marginLeft:10 }}>{movie.title}</Button></Link>)}
  </Card.Body>
</Card>
            </Col>
            
</Row>  
</Container>
        </div>
    )
}

export default MovieCard
