import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            bio
            twitter
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;

  return (
    <Wrapper>
      <div>
        <StaticImage
          layout="fixed"
          formats={['AUTO', 'WEBP', 'AVIF']}
          src="../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <p>
          Written by <strong>{author.name}</strong>
        </p>
        <p>{author?.bio || null}</p>
        <p>
          <a href={`https://twitter.com/${author?.twitter}`}>Follow me on Twitter!</a>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: var(--spacing-16);
`;

const Avatar = styled(StaticImage)`
  margin-right: var(--spacing-4);
  margin-bottom: var(--spacing-0);
  min-width: 50px;
  border-radius: 100%;
`;

export default Bio;
