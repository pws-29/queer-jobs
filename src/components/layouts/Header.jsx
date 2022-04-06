import React from 'react';
import styled from "styled-components";
import Logo from "../atoms/Logo";
import Link from "../atoms/Link";
import Button from "../atoms/Button";

function Header() {
  return (
      <Wrapper>

          <Logo />
          <Nav>
            <Link type="headerLink" target="/">Para canditados</Link>
            <Link type="headerLink" target="/">Para empresas</Link>
            <Button type="secondary">Login</Button>
          </Nav>



      </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 120px;
    height: 80px;

`

const Nav = styled.nav`
    
`

export default Header