import React from 'react';
import '../Community.css';
import CommunityFeed from './CommunityFeed';
import CommunitySideBar from './CommunitySideBar';
import CommunityTwitter from './CommunityTwitter';
function Community() {
  return (
    <div className="community">
      <CommunitySideBar />
      <CommunityFeed />
      <CommunityTwitter />
    </div>
  );
}

export default Community;
// CommunitySideBar
