import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const Header = (props) => {
  // const [isHidden, setIsHidden] = useState(false);

  return (
    <Wrapper>
      <Menu url={props.url} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: #ffffff;
  height: ${(props) => props.theme.header.height}px;
  top: ${(props) => (props.hidden ? `-${props.theme.header.height}px` : 0)};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 9;
`;

export default Header;
