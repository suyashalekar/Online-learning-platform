import React from 'react';
import '../CommunityTwitter.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

function CommunityTwitter() {
  return (
    <div className="communityTwitter">
      <div className="communityTwitter__input">
        <SearchSharpIcon className="communityTwitter__searchIcon" />
        <input type="text" placeholder="Search Tweets" />
      </div>

      <div className="communityTwitter__container">
        <TwitterTweetEmbed tweetId={'1366597399737638915'} />

        <TwitterTimelineEmbed sourceType="profile" screenName="MatrixSparse" options={{ height: 400 }} />

        <TwitterShareButton />
      </div>
    </div>
  );
}

export default CommunityTwitter;
