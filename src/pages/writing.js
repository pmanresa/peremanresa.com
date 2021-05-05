import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/PostList';

const WritingPage = (props) => {
  const posts = props.data.allMarkdownRemark.edges.map((p) => p.node);

  return (
    <Layout location={props.location}>
      <SEO title="All posts" />
      <H1>Writing</H1>
      <div>I like to write about Data Science, Machine Learning and Career.</div>
      <div>
        <p>Browse posts by Tag:</p>
        <div></div>
      </div>
      <PostList posts={posts} />
    </Layout>
  );
};

const H1 = styled.h1`
  font-size: ${(props) => props.theme.page.header.fontSize};
  padding: 0;
  span {
    border-bottom: 1px solid rgba(0, 0, 0, 0.44);
    display: inline-block;
    padding-bottom: ${({ theme }) => theme.scale(3.5)};
    margin-bottom: -1px;
  }
`;

export default WritingPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
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
