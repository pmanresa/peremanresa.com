import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import { Link } from 'gatsby';

const Header = (props) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>
      </LogoWrapper>
      <Menu url={props.url} menu={props.menu} />
    </Wrapper>
  );
};

// LogoWrapper serves as a "div box container" for main Wrapper's flex justify-content: space-between to work
const LogoWrapper = styled.div``;

const LogoImg = styled.img`
  width: ${(props) => props.theme.header.logo.width};
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(props) => props.theme.header.paddingBottom};
`;

export default Header;
