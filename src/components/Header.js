import React from "react";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">ProShop</Link>
          {userInfo && userInfo.name ? (
            <NavDropdown title={userInfo.name} id="username">
              <Link to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </Link>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </Container>
        <Link to="/cart">Cart</Link>
      </Navbar>
     
    </header>
  );
};

export default Header;
