import React from 'react';
import { Link } from 'gatsby';
import { FormattedDate } from 'react-intl';
import { formatReadingTime } from '../utils/helpers';

const PostPreview = ({ post }) => {
  return (
    <li key={post.fields.slug}>
      <article className="post-list-item" itemScope itemType="http://schema.org/Article">
        <header>
          <h4>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{post.frontmatter.title}</span>
            </Link>
          </h4>
          <small>
            <FormattedDate value={new Date(post.frontmatter.date)} month="long" day="numeric" year="numeric" />
            {post.timeToRead && ` • ${formatReadingTime(post.timeToRead)}`}
            {post.frontmatter.tags && ` • ${post.frontmatter.tags.join(', ')}`}
          </small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  );
};

const PostList = (props) => {
  const posts = props.posts;

  return (
    <div>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => (
          <PostPreview post={post} />
        ))}
      </ol>
    </div>
  );
};

export default PostList;
