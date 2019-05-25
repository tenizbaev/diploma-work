import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import { UncontrolledCollapse,DropdownMenu,DropdownItem,DropdownToggle,UncontrolledDropdown,
 NavbarBrand,Navbar,Nav, Container,Row,Col} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Menu</span>
                    </DropdownToggle>
                    <DropdownMenu>

                      <DropdownItem to="/home" tag={Link}>
                        Home
                      </DropdownItem>
                      <DropdownItem to="/rooms" tag={Link}>
                        Rooms
                      </DropdownItem>
                      <DropdownItem to="/book" tag={Link}>
                        Book
                      </DropdownItem>
                      <DropdownItem to="/map" tag={Link}>
                        Map
                      </DropdownItem>
                      <DropdownItem to="/contacts" tag={Link}>
                        Contacts
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
