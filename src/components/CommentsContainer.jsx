import React from 'react';
import Comment from './Comment';

function CommentsContainer({comments}) {

const commentList = comments.map(commentObj => <Comment user={commentObj.user} comment={commentObj.comment}/>)

  return (
  <div>
      <h3>{comments.length} comments</h3>
        {commentList}
  </div>)
}

export default CommentsContainer;
