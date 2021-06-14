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
  padding: ${(props) => props.theme.menu.desktop.padding};
  display: flex;
  align-items: right;
  background-color: ${(props) => props.theme.menu.mobile.closed.bg};
`;

const MenuLink = styled(Link)`
  font-family: ${(props) => props.theme.menu.desktop.a.fontFamily};
  font-weight: ${(props) => props.theme.menu.desktop.a.fontWeight};
  font-size: ${(props) => props.theme.menu.desktop.a.fontSize};
  text-align: ${(props) => props.theme.menu.desktop.a.textAlign};
  display: inline;
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
