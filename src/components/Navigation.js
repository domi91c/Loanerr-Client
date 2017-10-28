import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {
  Collapse,
  Navbar,
  Dropdown,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownToggle,
  NavDropdown,
  DropdownMenu, Container,
} from 'reactstrap'

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen,

    })
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Container>
            <a class="navbar-brand" href="#">Loanerr</a>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span
                      class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </ul>
            </Collapse>
          </Container>
        </nav>
    )
  }
}