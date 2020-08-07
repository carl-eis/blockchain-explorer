import React, { FC } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: block;
  height: 65px;
  position: fixed;
  background: #121D33;
  z-index: 1;
  width: 100%;
`;


interface IProps {
  [x: string]: any;
}

const Navbar: FC<IProps> = (props) => {
  return (
    <NavbarWrapper>

    </NavbarWrapper>
  );
};

Navbar.defaultProps = {};

export default Navbar;
