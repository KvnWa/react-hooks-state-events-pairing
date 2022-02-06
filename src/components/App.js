import { useState } from 'react'
import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay.jsx";
import MainContent from './MainContent.jsx';
import CommentsContainer from './CommentsContainer.jsx';

function App() {
  const [ videoObj, setVideoObj ] = useState(video)
  const [ toggleComments, setToggleComments ] = useState(false)

  function addVote() {
    const newObj = {...videoObj, upvotes: videoObj.upvotes + 1}

    setVideoObj(newObj)
  }

  function subtractVote() {
    const newObj = {...videoObj, downvotes: videoObj.downvotes - 1}
    setVideoObj(newObj)
  }

  function handleCommentToggle() {
    setToggleComments(currentToggleState => !currentToggleState)
  }

  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay embedUrl={videoObj.embedUrl} />
      <MainContent 
      title={videoObj.title} 
      views={videoObj.views} 
      createdAt={videoObj.createdAt} 
      upvotes={videoObj.upvotes} 
      downvotes={videoObj.downvotes}
      handleCommentToggle={handleCommentToggle} 
      toggleComments={toggleComments}
      addVote={addVote}
      subtractVote={subtractVote}/>
      {toggleComments ? 
      <CommentsContainer comments={videoObj.comments} /> 
      : 
      null 
    }
    </div>
  );
}

export default App;
