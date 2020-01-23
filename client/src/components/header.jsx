import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleAuth from "./auth/googleAuth";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/"> React Bootstrap</Link>
        </Navbar.Brand>
        <GoogleAuth/>
      </Navbar>
    </>
  );
};

export default Header;
