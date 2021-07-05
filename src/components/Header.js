import React from 'react'
import {Card,Nav,Col,Row,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div>
<Container className="contact-content debug-border pt-0 login"  >
           
                <Row className="justify-content-center " >       
                     <Col >
<Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
      <Link style={{marginLeft:10,textDecoration: 'none' }} className="link" to="/"> <Nav.Link href="#first">Home</Nav.Link></Link>
      </Nav.Item>
      <Nav.Item>
      <Link style={{marginLeft:10,textDecoration: 'none' }} className="link" to="/MovieCard"><Nav.Link href="#link">Card</Nav.Link></Link>
      </Nav.Item>
     
    </Nav>
  </Card.Header>
  
</Card>
             
       </Col>
            
</Row>  
</Container>      

        </div>
    )
}

export default Header

