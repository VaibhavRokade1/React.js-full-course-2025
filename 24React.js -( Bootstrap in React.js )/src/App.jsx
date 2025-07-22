import { Button } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className="p-2 rounded bg-warning text-center">Bootstrap</h1>
      <div className="d-flex gap-3">
        <Button variant="dark">Click Me</Button>
        <Button variant="danger">Click Me</Button>
        <Button variant="success">Click Me</Button>
        <Button variant="dark">Click Me</Button>
        <Button variant="primary">Click Me</Button>
      </div>
      <div className="d-flex gap-3 mt-2">
        <Button variant="outline-danger">Click Me</Button>
        <Button variant="outline-info">Click Me</Button>
        <Button variant="outline-success">Click Me</Button>
        <Button variant="outline-dark">Click Me</Button>
        <Button variant="outline-primary">Click Me</Button>
      </div>
    </>
  );
}

export default App;
