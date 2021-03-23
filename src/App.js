import './App.css';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" variant="light" style={{ padding: "8px 120px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.5) " }}>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>WIS.WISE</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button> */}
          </Form>
        </Navbar>
      </header>

    </div>
  );
}

export default App;
