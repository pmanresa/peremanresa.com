import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FaYoutube, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import WelcomePicture from '../images/welcome_picture.png';
import { hidden, media, visible } from '../themes/responsive';

const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            bio
          }
          contact {
            link
          }
        }
      }
    }
  `);
  const bio = data.site.siteMetadata.author.bio;
  const emailLink = data.site.siteMetadata.contact.link;

  return (
    <div>
      <Wrapper>
        <BioWrapper middle>
          <BioContainer>
            <Name>👋 Hi! I'm Pere Manresa</Name>
            <span dangerouslySetInnerHTML={{ __html: bio }} />
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
              <li>
                <AIcon href={emailLink} target="_blank" rel="noreferrer noopener">
                  <HiOutlineMail />
                </AIcon>
              </li>
            </SocialLinks>
          </BioContainer>
        </BioWrapper>
        <PictureContainer center>
          <ProfilePicture src={WelcomePicture} alt="Pere Manresa" width="165" height="165" />
        </PictureContainer>
        <div></div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: ${(props) => props.theme.welcome.margin};
  font-family: ${(props) => props.theme.blog.author.fontFamily};
  font-size: ${(props) => props.theme.blog.author.fontSize};
  line-height: ${(props) => props.theme.blog.author.lineHeight};
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;

  ${media.md`
    flex-direction: row;
  `};
`;

const BioWrapper = styled.div`
  padding-right: 0;
  ${media.md`
    padding-right: 150px;
  `};
`;

const BioContainer = styled.div`
  padding: 0px;
`;

const SocialLinks = styled.ul`
  margin-top: 26px;
  margin-bottom: 30px;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 20px;
  }
`;

const PictureContainer = styled.div`
  width: 165px;
  /* position: relative;
  grid-column: 2 / span 2;
  grid-row: 1 / span 1; */
  // border-radius: 50%;
`;

const ProfilePicture = styled.img`
  /* width: 100%;
  height: 100%; */
  border-radius: 50%;
`;

const AIcon = styled.a`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  font-size: 1.5rem;
  display: inline-block;
  padding: ${(props) => props.theme.socialLinks.a.padding};
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.socialLinks.a.hover.color};
    transition: 0.3s;
  }
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  font-style: normal;
  line-height: 60px;
  margin: 1.2rem 0 1.6rem;
`;

export default Welcome;
