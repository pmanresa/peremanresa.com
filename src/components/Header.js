import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Wrapper>
      <Menu url={props.url} menu={props.menu} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: #ffffff;
  height: ${(props) => props.theme.header.height}px;
  top: ${(props) => (props.hidden ? `-${props.theme.header.height}px` : 0)};
  box-sizing: border-box;
  position: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0;
`;

export default Header;
