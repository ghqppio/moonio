import React from "react";
import { HeaderProps } from "./types";
import Navbar from "react-bootstrap/Navbar";
import Spinner from "react-bootstrap/Spinner";

const Header = (props: HeaderProps) => {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand className="mr-auto">Moonio</Navbar.Brand>
        {props.loading && (
          <Spinner animation="border" variant="light" size="sm" />
        )}
      </Navbar>
    </div>
  );
};

export default Header;
