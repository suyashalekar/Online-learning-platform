import React, { forwardRef } from 'react';
import '../CommunityPost.css';
import { Button, Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const CommunityPost = forwardRef(({ displayName, text, image, avatar }, ref) => {
  return (
    <div className="commuPost" ref={ref}>
      <div className="commuPost__avatar">
        <Avatar src={avatar} />
      </div>

      <div className="commuPost__body">
        <div className="commuPost__header">
          <h3>{displayName}</h3>
        </div>

        <div className="commuPost__headerDescription">
          <p>{text}</p>
        </div>

        <img src={image} alt="" srcset="" />

        <div className="commuPost__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default CommunityPost;
