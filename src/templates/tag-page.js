import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/PostList';

const TagRoute = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges.map((p) => p.node);

  return (
    <Layout location={location}>
      <h1>
        🔖 Tag: {pageContext.tag} ({data.allMarkdownRemark.totalCount})
      </h1>
      <PostList posts={posts} />
    </Layout>
  );
};

export default TagRoute;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { eq: false } } }
    ) {
      totalCount
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
        }
      }
    }
  }
`;
