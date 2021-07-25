import React from 'react';
import '../CommunitySideBar.css';

import TwitterIcon from '@material-ui/icons/Twitter';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import CommunitySearchBarOpt from './CommunitySearchBarOpt';

function CommunitySideBar() {
  return (
    <div className="communitySideBar">
      <div>
        <CommunitySearchBarOpt active Icon={HomeIcon} text="Home" />
      </div>

      <CommunitySearchBarOpt Icon={SearchIcon} text="Search" />

      <CommunitySearchBarOpt Icon={NotificationsNoneIcon} text="Notification" />

      <CommunitySearchBarOpt Icon={MailOutlineIcon} text="Messages" />
      <CommunitySearchBarOpt Icon={BookmarkBorderIcon} text="Bookmarks" />
      <CommunitySearchBarOpt Icon={ListAltIcon} text="Lists" />
      <CommunitySearchBarOpt Icon={PermIdentityIcon} text="Profile" />
      <CommunitySearchBarOpt Icon={MoreHorizIcon} text="More" />
    </div>
  );
}

export default CommunitySideBar;
