import React from 'react';
import PostPreview from './PostPreview';

const PostList = (props) => {
  const posts = props.posts;

  return (
    <div>
      <ol style={{ listStyle: `none`, paddingInlineStart: `10px` }}>
        {posts.map((post) => (
          <PostPreview post={post} />
        ))}
      </ol>
    </div>
  );
};

export default PostList;
