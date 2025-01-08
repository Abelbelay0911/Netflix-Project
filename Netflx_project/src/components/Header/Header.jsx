import React from 'react';
import "./Header.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/NetflixLogo.svg.png";

const Header = () => {
    return (
      <div className="nav-color">
        <Navbar
          expand="lg"
          className="bg-body-tertiary navbar navbar-expand-lg navbar-dark"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav className="me-auto">
                  <Nav.Link href="">
                    <img src={NetflixLogo} width={"100"} alt="" />
                  </Nav.Link>
                  <Nav.Link href="https://abelbelay0911.github.io/Netflix-Clone-2024/">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#pricing">Tvshows</Nav.Link>
                  <Nav.Link href="#pricing">Movies</Nav.Link>
                  <Nav.Link href="#pricing">Latest</Nav.Link>
                  <Nav.Link href="#pricing">MyList</Nav.Link>
                  <Nav.Link href="#pricing">Browse by Languages</Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
            <div className='right-side-Header'>
            <Nav>
              <Nav.Link href="">
                <SearchIcon />
              </Nav.Link>
              <Nav.Link eventKey={2} href="">
                <NotificationsNoneIcon />
              </Nav.Link>
              <Nav.Link eventKey={3} href="">
                <AccountBoxIcon />
              </Nav.Link>
              <Nav.Link eventKey={4} href="">
                <ArrowDropDownIcon />
              </Nav.Link>
            </Nav></div>
          </Container>
        </Navbar>
        
      </div>
    );
}


export default Header;
