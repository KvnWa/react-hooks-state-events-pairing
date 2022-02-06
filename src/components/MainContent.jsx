import React from 'react';

function MainContent({title, views, createdAt, upvotes, downvotes, handleCommentToggle, toggleComments, addVote, subtractVote}) {
  return (
      <div>
          <h1>{title}</h1>
          <p>{views} | {createdAt}</p>
          <button onClick={addVote}>Upvotes {upvotes}👍</button>
          <button onClick={subtractVote}>Downvotes {downvotes}👍</button>
          <br></br>
          <button onClick={handleCommentToggle}>{toggleComments ? "Hide Comments" : "Show Comments"}</button>  
      </div>
  )
}

export default MainContent;
