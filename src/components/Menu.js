import Nav from 'react-bootstrap/Nav';


function Menu() {
  return (
    <>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Menu;