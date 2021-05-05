import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MenuItem = ({ label, slug, isSelected, handleClickOpen }) => {
  return (
    <li>
      <MenuLink selected={isSelected} to={slug} onClick={handleClickOpen} partiallyActive={true}>
        {label}
      </MenuLink>
    </li>
  );
};

const Menu = (props) => {
  const menu = props.menu;
  const [isOpen, setIsOpen] = useState(true);

  const handleClickOpen = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav isOpen={isOpen}>
      <Ul isOpen={isOpen}>
        {menu.map((item) => (
          <MenuItem
            key={item.slug}
            label={item.label}
            slug={item.slug}
            isSelected={props.url === item.slug}
            handleClickOpen={handleClickOpen}
          />
        ))}
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  text-align: right;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: ${(props) => props.theme.menu.desktop.padding};
  display: flex;
  flex-grow: 1;
  align-items: right;
  position: relative;
  justify-content: flex-end;
  right: auto;
  left: auto;
  height: auto;
  transform: none;
  background-color: ${(props) => props.theme.menu.mobile.closed.bg};
`;

const MenuLink = styled(Link)`
  display: inline;
  font-family: ${(props) => props.theme.menu.desktop.a.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: right;
  padding: ${(props) => props.theme.menu.desktop.a.padding};
  color: ${(props) => (props.selected ? props.theme.menu.desktop.a.active.color : props.theme.menu.desktop.a.color)};
  &:hover {
    color: ${(props) => props.theme.menu.desktop.a.active.color};
    text-decoration: none;
  }
`;

const Ul = styled.ul`
  opacity: 1;
  margin: ${(props) => props.theme.menu.desktop.ul.margin};
  li {
    display: inline-block;
  }
`;

export default Menu;
