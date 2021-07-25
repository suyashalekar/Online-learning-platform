import React, { useEffect, useState } from 'react';
import '../CommunityFeed.css';
import { db } from '../firebase';
import CommunityPost from './CommunityPost';
import CommunityTweetBox from './CommunityTweetBox';
import FlipMove from 'react-flip-move';

function CommunityFeed() {
  const [posts, setPosts] = useState([]);
  const [postsRev, setPostsRev] = useState([]);

  // console.log(posts);

  useEffect(() => {
    let i = 0;
    let n = postsRev.length;
    const postsRef = db.collection('posts');
    postsRef.onSnapshot((snapshot) => {
      setPostsRev(snapshot.docs.map((doc) => doc.data()));

      const revArray = [];
      for (i = 0; i < n; i++) {
        revArray[i] = postsRev[n - i - 1];
      }
      setPosts(revArray);
    });
  });

  return (
    <div className="communityFeed">
      <div className="communityFeed__header">
        <h2>Community</h2>
      </div>
      <CommunityTweetBox />

      <FlipMove>
        {postsRev.map((post) => (
          <CommunityPost displayName={post.displayName} text={post.text} image={post.image} avatar={post.avatar} />
        ))}
      </FlipMove>
    </div>
  );
}

export default CommunityFeed;
