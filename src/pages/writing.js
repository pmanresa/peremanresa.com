import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/PostList';

const tags = ['all', 'machine learning', 'career', 'productivity', 'software engineering', 'popular', 'favorites'];

const WritingPage = (props) => {
  const posts = props.data.allMarkdownRemark.edges.map((p) => p.node);

  return (
    <Layout location={props.location}>
      <SEO title="All posts" />
      <H1>✍🏻 Writing</H1>
      <OverviewContainer>
        I like to write about Data Science, Machine Learning and Career.
        <Tags>
          Browse posts by Tag:
          <Ul>
            {tags.map((tag) => (
              <Li key={tag}>{tag}</Li>
            ))}
          </Ul>
        </Tags>
      </OverviewContainer>
      <PostList posts={posts} />
    </Layout>
  );
};

const H1 = styled.h1`
  font-size: ${(props) => props.theme.page.header.fontSize};
  font-family: ${(props) => props.theme.page.header.fontFamily};
  padding: 0;
  margin: ${(props) => props.theme.page.header.margin};
`;

const OverviewContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
`;

const Tags = styled.div`
  margin-top: 10px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  list-style-type: none;
  padding-inline-start: 10px;
`;

const Li = styled.li`
  padding-right: 60px;
  padding-bottom: 10px;
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
