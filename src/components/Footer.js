import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = ({ sourceCodeLink }) => {
  return (
    <Wrapper>
      <span>
        <SocialLinks>
          <li>
            <AIcon href="https://twitter.com/peremanresa6" target="_blank" rel="noreferrer noopener">
              <FaTwitter />
            </AIcon>
          </li>
          <li>
            <AIcon href="https://www.linkedin.com/in/pere-manresa/" target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </AIcon>
          </li>
          <li>
            <AIcon href="https://github.com/pmanresa" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </AIcon>
          </li>
          <li>
            <AIcon
              href="https://www.youtube.com/channel/UCnyGksk-QQ5Rb-UjB43SVaQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaYoutube />
            </AIcon>
          </li>
        </SocialLinks>
        <p>
          {' This site is built with '}
          <A href="https://www.gatsbyjs.org/">Gatsby</A>
          {' and hosted on '}
          <A href="https://www.netflify.com/">Netlify</A>
          {'. Source code can be found at '}
          <A href={sourceCodeLink}>Github</A>
          {'.'}
        </p>
        <p>Copyright © {new Date().getFullYear()} | All rights reserved</p>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  font-family: ${({ theme }) => theme.fonts.SansSerif};
  font-size: 0.8rem;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  margin-top: 2rem;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

const SocialLinks = styled.ul`
  margin-top: 26px;
  margin-bottom: 30px;
  list-style: none;
  padding-top: 10px;
  li {
    display: inline-block;
    margin-right: 35px;
  }
`;

const AIcon = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  text-decoration: none;
  font-size: 1.8rem;
  display: inline-block;
  padding: 0px;
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    transition: 0.3s;
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

const A = styled.a`
  font-weight: bold;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export default Footer;
