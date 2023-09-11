import Nav from 'react-bootstrap/Nav';

function Menu() {
  return (
    <>
        <Nav className="justify-content-end" activeKey="#">
        <Nav.Item>
          <Nav.Link href="/work">Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Menu;