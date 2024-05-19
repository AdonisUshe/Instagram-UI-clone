import { Avatar } from "@mui/material";
import React from 'react';
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      {/* Title for the suggestions section */}
      <div className="suggestions__title">Suggestions for you</div>
      
      {/* Container for suggested users */}
      <div className="suggestions__usernames">
        {/* Suggested user 1 */}
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>S</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Stabilo</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        {/* Suggested user 2 */}
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>H</Avatar>
            </span>
            <div className="username__info">
              <span className="username">H</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        {/* Suggested user 3 */}
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Ryzen</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        {/* Suggested user 4 */}
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">AMD</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
