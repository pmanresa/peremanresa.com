import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import theme from '../themes/theme';
import { IntlProvider } from 'react-intl';

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author {
            name
          }
          sourceCodeLink
          menu {
            label
            slug
          }
        }
      }
    }
  `);
  const { children, location } = props;
  const homePath = `${__PATH_PREFIX__}/`;
  const isHome = location.pathname === homePath;
  const url = location.pathname;
  const { author, sourceCodeLink, menu } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale="en">
        <BodyContainer>
          <Container>
            <Header isHome={isHome} url={url} menu={menu} />
            <main>{children}</main>
          </Container>
          <Footer author={author} sourceCodeLink={sourceCodeLink} />
          <GlobalStyle />
        </BodyContainer>
      </IntlProvider>
    </ThemeProvider>
  );
};

const BodyContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.System};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  font-feature-settings: 'calt' 1, 'clig' 1, 'dlig' 1, 'kern' 1, 'liga' 1, 'salt' 1;
`;

const Container = styled.section`
  max-width: ${(props) => props.theme.maxWidth};
  padding: ${(props) => props.theme.padding};
  margin: ${(props) => props.theme.margin};
`;

const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior-y: none;
  }
  a {
    color: ${(props) => props.theme.a.color};
    text-decoration: ${(props) => props.theme.a.textDecoration};
    transition: all 0.2s;
    :hover {
      transition: all 0.2s;
      // color: ${(props) => props.theme.a.hover.color};
      text-decoration: ${(props) => props.theme.a.hover.textDecoration};
    }
  }
  b, strong {
    font-weight: bold;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.SansSerif};
  }
  h1{
    margin:${(props) => props.theme.h1.margin};
    padding:${(props) => props.theme.h1.padding};
    font-size:${(props) => props.theme.h1.fontSize};
    line-height: 1.4;
  }
  h2{
    margin:${(props) => props.theme.h2.margin};
    padding:${(props) => props.theme.h2.padding};
    font-size:${(props) => props.theme.h2.fontSize};
    line-height: 1.4;
  }
  h3{
    margin:${(props) => props.theme.h3.margin};
    padding:${(props) => props.theme.h3.padding};
    font-size:${(props) => props.theme.h3.fontSize};
    line-height: 1.4;
  }
  h4{
    margin:${(props) => props.theme.h4.margin};
    padding:${(props) => props.theme.h4.padding};
    font-size:${(props) => props.theme.h4.fontSize};
    line-height: 1.4;
  }
  h5{
    margin:${(props) => props.theme.h5.margin};
    padding:${(props) => props.theme.h5.padding};
    font-size:${(props) => props.theme.h5.fontSize};
    line-height: 1.4;
  }
  h6{
    margin:${(props) => props.theme.h6.margin};
    padding:${(props) => props.theme.h6.padding};
    font-size:${(props) => props.theme.h6.fontSize};
    line-height: 1.4;
  }
  figcaption {
    font-family: ${(props) => props.theme.fonts.System};
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
  sup {
    font-size: 75%;
    vertical-align: super;
  }
  ::selection {
    background: ${({ theme }) => theme.colors.accent[0]};
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.colors.accent[0]};
  }
  .footnotes {
    ol, p {
      font-size: 14px !important;
    }
    p {
      padding-top: 0px !important;
    }
    .footnote-backref {
      display: none;
    }
  }
  .giphy-embed {
    margin-top: 2rem;
  }
`;

export default Layout;
