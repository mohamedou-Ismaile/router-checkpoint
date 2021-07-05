import React from 'react'
import {Col,Container,Row,Card} from 'react-bootstrap';
const MovieDetail = ({movies, match}) => {

   const movie = movies.find(elm => elm.id === match.params.id);
    console.log(movie);
    return (
        <div>
         
                    <Container className="contact-content debug-border pt-5 login"  >
           
           <Row className="justify-content-center " >       
                <Col >
                <Card>

<Card.Body>
<Card.Title>{movie.title}</Card.Title>
<Card.Text>
{movie.description}
</Card.Text>
<iframe width="560" height="315" src={movie.tariler} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</Card.Body>
</Card>
       </Col>
       
</Row>  
</Container>
        </div>
    )
}

export default MovieDetail
