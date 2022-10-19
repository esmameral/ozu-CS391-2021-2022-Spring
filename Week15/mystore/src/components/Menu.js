import { React, useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { Outlet } from "react-router-dom";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    let toggle = () => {
        setIsOpen(!isOpen);
    };

    return <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                My Store
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/products">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Outlet />
        
    </div>;
}
export default Menu;
