import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = (props) => {
  const { bio, twitter } = props.data.site.siteMetadata.author;

  return (
    <Layout location={props.location}>
      <SEO title="About" />
      <StaticImage
        layout="fixed"
        formats={['AUTO', 'WEBP', 'AVIF']}
        src="../images/profile-pic.png"
        width={75}
        height={75}
        quality={95}
        alt="Profile picture"
      />
      <span dangerouslySetInnerHTML={{ __html: bio }} />
      <p>Longer bio here</p>
      <p>Work Bio here</p>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          bio
          twitter
        }
      }
    }
  }
`;
