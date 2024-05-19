import React, { useState } from "react";
import Post from './posts/Post';
import "./Timeline.css";
import Suggestions from './Suggestions';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Adonis",
      postImage: "https://www.greekboston.com/wp-content/uploads/2020/03/santorini-greece-scaled.jpg",
      likes: 340,
      timestamp: "1d",
    },
    {
      user: "MK",
      postImage: "https://cdn2.wanderlust.co.uk/media/1002/shutterstock_604599662-1.jpg?anchor=center&mode=crop&width=1600&height=0&format=auto&quality=90&rnd=132553811510000000",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "CD",
      postImage: "https://mostbeautifulpicture.com/wp-content/uploads/2017/06/London.jpg",
      likes: 140,
      timestamp: "1hr",
    },
    {
      user: "Dave",
      postImage: "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?cs=srgb&dl=pexels-nextvoyage-1461974.jpg&fm=jpg",
      likes: 200,
      timestamp: "40min",
    },
  ]);

  return (
    <div className="timeline">
      {/* Left section of the timeline containing posts */}
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              key={post.user + post.timestamp} // Added key prop for unique identification
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      
      {/* Right section of the timeline containing suggestions */}
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
