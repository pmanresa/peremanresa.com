import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = (props) => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location}>
      <SEO title="All posts" />
      <h1>Hi from the blog</h1>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.node.frontmatter.title || post.node.fields.slug;

          return (
            <li key={post.node.fields.slug}>
              <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                <header>
                  <h2>
                    <Link to={post.node.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.node.frontmatter.description || post.node.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
