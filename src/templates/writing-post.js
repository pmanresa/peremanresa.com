import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { FormattedDate } from 'react-intl';
import { formatReadingTime } from '../utils/helpers';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <Post
        // className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <H1 itemProp="headline">{post.frontmatter.title}</H1>
          <HeaderInfo>
            <FormattedDate value={new Date(post.frontmatter.date)} month="long" day="numeric" year="numeric" />
            {post.timeToRead && ` • ${formatReadingTime(post.timeToRead)}`}
          </HeaderInfo>
        </header>
        <Content itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Bio />
        </footer>
      </Post>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

const Post = styled.article`
  margin: ${(props) => props.theme.blog.post.margin};
  padding: ${(props) => props.theme.blog.post.padding};
  max-width: ${(props) => props.theme.blog.post.maxWidth};
`;

const H1 = styled.h1`
  padding: 0;
  font-family: ${(props) => props.theme.blog.post.header.fontFamily};
  margin: ${(props) => props.theme.blog.post.header.margin};
  font-size: ${(props) => props.theme.blog.post.header.fontSize};
`;

const HeaderInfo = styled.div`
  font-size: 0.9rem;
  color: #8695a4;
`;

const Content = styled.section`
  margin: 0 0 ${({ theme }) => theme.scale(6)} 0;
  font-family: ${(props) => props.theme.blog.post.content.fontFamily};
  p > code {
    color: ${(props) => props.theme.blog.post.content.code.color};
    font-size: ${(props) => props.theme.blog.post.content.code.fontSize};
    margin: ${(props) => props.theme.blog.post.content.code.margin};
    padding: ${(props) => props.theme.blog.post.content.code.padding};
    background-color: ${(props) => props.theme.blog.post.content.code.backgroundColor};
    border-radius: ${(props) => props.theme.blog.post.content.code.borderRadius};
  }

  .gatsby-highlight {
    margin: ${(props) => props.theme.blog.post.content.highlight.margin};
    padding: ${(props) => props.theme.blog.post.content.highlight.padding};
    background-color: ${(props) => props.theme.blog.post.content.highlight.backgroundColor};
    display: flex;
    border-radius: ${(props) => props.theme.blog.post.content.highlight.borderRadius};
    overflow: auto;

    code {
      color: ${(props) => props.theme.blog.post.content.highlight.code.color};
    }

    pre {
      width: 100%;
      border: 2px solid ${(props) => props.theme.colors.white};
    }
  }

  p {
    margin: ${(props) => props.theme.blog.post.content.p.margin};
    padding: ${(props) => props.theme.blog.post.content.p.padding};
    font-size: ${(props) => props.theme.p.fontSize};
    line-height: ${(props) => props.theme.p.lineHeight};
  }

  strong {
    font-weight: bold;
  }

  ul,
  ol {
    margin: ${(props) => props.theme.blog.post.content.ul.margin};
    padding: ${(props) => props.theme.blog.post.content.ul.padding};
    font-size: ${(props) => props.theme.blog.post.content.ul.fontSize};
    line-height: ${(props) => props.theme.p.lineHeight};
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    padding-top: 1rem;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.brand};
    font-style: italic;
    margin: ${({ theme }) => theme.scale(3)} 0 0;
    padding: ${({ theme }) => theme.scale(0)} ${({ theme }) => theme.scale(1)};
    position: relative;
    text-align: left;
    color: ${({ theme }) => theme.colors.dark[0]};
  }

  blockquote > p:first-child {
    padding: 0;
  }

  img {
    max-width: 100%;
  }
`;

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      timeToRead
      html
      frontmatter {
        title
        date
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
