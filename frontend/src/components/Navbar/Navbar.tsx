import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrestigioLogo from "../../assets/prestigio.jpg";

export default function Header(): JSX.Element {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={PrestigioLogo}
            style={{ width: "70px", height: "70px", margin: "0 30px 0 0" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <Nav className="me-auto">
            <Nav.Link href="/cadastrarProduto">Conheça nossos Pontos</Nav.Link>
            <Nav.Link href="/home">Estoque</Nav.Link>
            <NavDropdown title="Redes Sociais" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
