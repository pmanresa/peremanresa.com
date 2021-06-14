import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FaYoutube, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import WelcomePicture from '../images/welcome_picture.png';
import { media } from '../themes/responsive';

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
    <Wrapper>
      <BioWrapper>
        <BioContainer>
          <Name>👋 Hi! I'm Pere Manresa</Name>
          <span dangerouslySetInnerHTML={{ __html: bio }} />
          <p>
            Learn more about me <Link to={'/about/'}>here</Link>
          </p>
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
      <PictureContainer>
        <ProfilePicture src={WelcomePicture} alt="Pere Manresa" width="165" height="165" />
      </PictureContainer>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: ${(props) => props.theme.welcome.margin};
  font-family: ${(props) => props.theme.welcome.fontFamily};
  font-size: ${(props) => props.theme.welcome.fontSize};
  line-height: ${(props) => props.theme.welcome.lineHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
  text-align: center;

  ${media.md`
    flex-direction: row;
    text-align: left;
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
  margin: 30px 0;
  li {
    display: inline-block;
    margin-right: 20px;
  }
`;

const PictureContainer = styled.div`
  width: 165px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
`;

const AIcon = styled.a`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.65rem;
  padding: ${(props) => props.theme.socialLinks.a.padding};
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.socialLinks.a.hover.color};
    transition: 0.3s;
  }
`;

const Name = styled.div`
  font-family: ${(props) => props.theme.welcome.greeting.fontFamily};
  font-size: ${(props) => props.theme.welcome.greeting.fontSize};
  font-weight: ${(props) => props.theme.welcome.greeting.fontWeight};
  margin: 2rem 0 1.6rem;
`;

export default Welcome;
