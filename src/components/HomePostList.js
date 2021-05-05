import React from 'react';
import { Link } from 'gatsby';
import { FormattedDate } from 'react-intl';

const HomePostListItem = ({ id, slug, date, title }) => (
  <li key={id}>
    <Link to={slug} itemProp="url">
      <FormattedDate value={new Date(date)} day="2-digit" month="short" year="numeric" />
      {' • '}
      {title}
    </Link>
  </li>
);

const HomePostList = (props) => {
  const title = props.title;
  const posts = props.posts;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {posts.map((post) => (
          <HomePostListItem
            id={title + post.fields.slug}
            slug={post.fields.slug}
            date={post.frontmatter.date}
            title={post.frontmatter.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomePostList;
