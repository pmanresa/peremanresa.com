import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Welcome from '../components/Welcome';
import HomePostList from '../components/HomePostList';
import SEO from '../components/seo';
import styled from 'styled-components';
import { media } from '../themes/responsive';

const IndexPage = (props) => {
  const allPosts = props.data.all.edges.map((p) => p.node);
  const featuredPosts = props.data.featured.edges.map((p) => p.node);

  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Welcome />
      <HomePostList title="🔥 Featured posts" posts={featuredPosts} />
      <HomePostList title="✍🏻 Latest posts" posts={allPosts} />
      <StyledLink to={'/writing/'} itemProp="url">
        View all posts
      </StyledLink>
    </Layout>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export default IndexPage;

export const pageQuery = graphql`
  query {
    all: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            description
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
    featured: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true }, featured: { eq: true } } }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            description
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
