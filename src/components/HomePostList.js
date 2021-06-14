import React from 'react';
import { Link } from 'gatsby';
import { FormattedDate } from 'react-intl';
import styled from 'styled-components';

const HomePostListItem = ({ id, slug, date, title }) => (
  <Li key={id}>
    <PostLink to={slug} itemProp="url">
      <StyledDate>
        <FormattedDate value={new Date(date)} day="2-digit" month="short" year="numeric" />
      </StyledDate>
      {' • '}
      <Title>{title}</Title>
    </PostLink>
  </Li>
);

const HomePostList = (props) => {
  const title = props.title;
  const posts = props.posts;

  return (
    <div>
      <h3>{title}</h3>
      <Ul>
        {posts.map((post) => (
          <HomePostListItem
            id={title + post.fields.slug}
            slug={post.fields.slug}
            date={post.frontmatter.date}
            title={post.frontmatter.title}
          />
        ))}
      </Ul>
    </div>
  );
};

const StyledDate = styled.span`
  font-family: ${(props) => props.theme.fonts.Mono};
  font-weight: 300;
`;

const PostLink = styled(Link)`
  color: ${(props) => props.theme.color};
  &:hover {
    color: ${(props) => props.theme.colors.brand};
    text-decoration: none;
    transition: 0.3s;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding-inline-start: 32px;
`;

const Li = styled.li`
  padding-bottom: 12px;
`;

const Title = styled.span`
  font-size: 1.15rem;
`;

export default HomePostList;
