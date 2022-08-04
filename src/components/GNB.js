import React from 'react';
import {useEffect, useState} from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import Link from 'next/link'

export default function GNB () {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>사과마켓</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href='/'><a className='mx-3' style={{textDecoration:"none"}}>리스트</a></Link>
              <Link href="/upload"><a className='mx-3' style={{textDecoration:"none"}}>등록</a></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}
