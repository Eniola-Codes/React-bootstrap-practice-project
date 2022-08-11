import logo from './logo.svg';
import './App.css';
import { Row, Card, Image, Col, Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
      </header>
    <main>
    <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}><Image src='https://picsum.photos/900/400' alt='nice' fluid rounded /></Col>
           <Col className='font-weight-light' sm={5}><h1>Tagline</h1>
           <p className='mt-4'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
           </p>
           <Button variant='outline-primary'>Call to Action</Button>
           </Col>
      </Row>
      <Row>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
      <Card.Body>This is some text within a card body., This is some text within a card body.</Card.Body>
    </Card>
      </Row>

      <Row>

      <Col sm={4}>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/210/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
      </Col>

      <Col sm={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
      </Col>

      <Col sm={4}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/220/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
      </Col>

      </Row>
    </Container>
    </main>
    <footer className='py-5 my-5 bg-dark'>
      <Container className='px-4'>
        <p className='text-center text-white'>Copyright &copy; EniolaCodes</p>
        </Container>
    </footer>
    </div>
  );
}

export default App;
