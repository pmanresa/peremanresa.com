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
          <img src={Logo} width="91" />
        </Link>
      </LogoWrapper>
      <Menu url={props.url} menu={props.menu} />
    </Wrapper>
  );
};

const LogoWrapper = styled.div``;

const Wrapper = styled.header`
  background: #ffffff;
  height: ${(props) => props.theme.header.height}px;
  top: ${(props) => (props.hidden ? `-${props.theme.header.height}px` : 0)};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export default Header;
