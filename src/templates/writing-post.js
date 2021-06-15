import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { FormattedDate } from 'react-intl';
import { formatReadingTime } from '../utils/helpers';
import WelcomePicture from '../images/welcome_picture.png';
import { FaShareAlt } from 'react-icons/fa';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <Post itemScope itemType="http://schema.org/Article">
        <header>
          <H1 itemProp="headline">{post.frontmatter.title}</H1>
          <SubHeadline>{post.frontmatter.description}</SubHeadline>
          <HeaderInfo>
            <PictureAndShareContainer>
              <PictureContainer>
                <Link to="/about/">
                  <ProfilePicture src={WelcomePicture} alt="Pere Manresa" width="47" />
                </Link>
                &nbsp; By&nbsp;
                <AuthorLink to={'/about/'}>Pere Manresa</AuthorLink>
              </PictureContainer>
              <ShareContainer>
                <ShareA>
                  <FaShareAlt />
                  &nbsp; Share
                </ShareA>
              </ShareContainer>
            </PictureAndShareContainer>
            <DetailsContainer>
              <FormattedDate value={new Date(post.frontmatter.date)} month="long" day="numeric" year="numeric" />
              {post.timeToRead && ` · ${formatReadingTime(post.timeToRead)}`}
            </DetailsContainer>
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
      {/* <Disqus
        config={
            url: location,
            identifier: location,
            title: post.frontmatter.title
          }
      /> */}
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
  font-stretch: ${(props) => props.theme.blog.post.header.fontStretch};
  font-size: ${(props) => props.theme.blog.post.header.fontSize};
`;

const SubHeadline = styled.div`
  padding: 0;
  font-family: ${(props) => props.theme.blog.post.header.fontFamily};
  margin-bottom: 30px;
  font-weight: 300;
  font-size: 20px;
`;

const HeaderInfo = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  font-size: 0.9rem;
  color: #8695a4;
`;

const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const PictureAndShareContainer = styled.div`
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  /* font-size: 1rem; */
`;

const ShareA = styled.a`
  /* border: 1px solid rgba(0, 0, 0, 0.1) !important;
  border-radius: 4px; */
  margin-right: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    transition: 0.3s;
    color: ${(props) => props.theme.colors.brand};
    text-decoration: none;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
`;

const AuthorLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;

  &:hover {
    transition: 0.3s;
    color: ${(props) => props.theme.colors.brand};
    text-decoration: none;
  }
`;

const DetailsContainer = styled.div`
  font-weight: 300;
`;

const Content = styled.section`
  margin: 0 0 ${({ theme }) => theme.scale(6)} 0;
  font-family: ${(props) => props.theme.blog.post.content.fontFamily};
  font-weight: ${(props) => props.theme.blog.post.content.fontWeight};
  line-height: ${(props) => props.theme.blog.post.content.lineHeight};
  font-size: ${(props) => props.theme.blog.post.content.fontSize};
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
    font-size: ${(props) => props.theme.blog.post.content.p.fontSize};
    line-height: ${(props) => props.theme.blog.post.content.p.lineHeight};
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
