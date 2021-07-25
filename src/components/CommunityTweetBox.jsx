import React, { useEffect, useState } from 'react';
import '../CommunityTweetBox.css';
import { Button, Avatar } from '@material-ui/core';
import firebase, { db } from '../firebase';
import { useStateValue } from '../StateProvider';

function CommunityTweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  // const [count, setCount] = useState('1');
  const [{ user }, dispatch] = useStateValue();
  const [name, setName] = useState('');
  // send tweet
  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage != '') {
      console.log(tweetMessage);
      db.collection('posts').add({
        displayName: name,
        avatar: '',
        image: tweetImage,
        text: tweetMessage,
      });
      setTweetMessage('');
      setTweetImage('');
      if (!user) {
        alert('please update your username');
      }
    } else {
      alert("Write your message in 'What's happening' section");
    }
  };

  useEffect(() => {
    if (user) {
      const ref = firebase.database().ref('history');
      ref.on('value', (snapshot) => {
        const name = snapshot.child(user.uid).child('detail').child('name').val();
        // console.log(name);
        setName(name);
      });
    } else {
      setName('guest');
    }
  });
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />

          <input type="text" placeholder="What's happening?" value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} />
        </div>
        <div className="tweetBox__imageUrl">
          <input type="text" placeholder="Enter image url (optional)" value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} />
        </div>
        <Button variant="outlined" className="tweetBox__button" onClick={sendTweet}>
          Post
        </Button>
      </form>
    </div>
  );
}

export default CommunityTweetBox;

// const sendTweet = (e) => {
//   e.preventDefault();

//   const postsRef = db.collection('posts');

//   postsRef.doc(count).set({
//     displayName: 'test bot',
//     avatar: 'https://yt3.ggpht.com/ytc/AAUvwnglMzGrbVJ6xzKv0YQRftGqI63h3KNu-aOWjD-V=s68-c-k-c0x00ffffff-no-rj',
//     image: tweetImage,
//     text: tweetMessage,
//   });

//   const num = Number(count) + 1;

//   setCount(num.toString());
//   setTweetMessage('');
//   setTweetImage('');

//   // count = String(num + 1);
//   // console.log(num.toString());
// };
// useEffect(() => {
//   console.log(typeof count);
//   console.log(count);
// }, []);
