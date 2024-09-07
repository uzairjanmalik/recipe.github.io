import React from 'react';
import { useParams } from 'react-router-dom';

function Video() {
  const { id } = useParams();
  
  return (
    <div>
      <video controls>
      <source src="" />
        Your browser does not support the video tag.
      </video>
      <div><p>Description for video {id}.</p></div>
    </div>
  );
}

export default Video;
