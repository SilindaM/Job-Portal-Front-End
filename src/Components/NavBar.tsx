import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Button, Container, Menu } from 'semantic-ui-react';

export interface INavBarProps {
}

export function NavBar (props: INavBarProps) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}
