import React from 'react';
import { Link } from 'gatsby';
import { FormattedDate } from 'react-intl';
import { formatReadingTime } from '../utils/helpers';
import styled from 'styled-components';

const PostPreview = ({ post }) => {
  return (
    <Wrapper key={post.fields.slug}>
      <TitleLink to={post.fields.slug} itemProp="url">
        <span itemProp="headline">{post.frontmatter.title}</span>
      </TitleLink>
      <div>
        <small>
          <FormattedDate value={new Date(post.frontmatter.date)} month="long" day="numeric" year="numeric" />
          {post.timeToRead && ` • ${formatReadingTime(post.timeToRead)}`}
          {post.frontmatter.tags && ` • ${post.frontmatter.tags.join(', ')}`}
        </small>
      </div>

      <div>
        <span
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
        />
      </div>
    </Wrapper>
  );
};

const TitleLink = styled(Link)`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.Heebo};
  font-weight: 400;
`;

const Wrapper = styled.li`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export default PostPreview;
