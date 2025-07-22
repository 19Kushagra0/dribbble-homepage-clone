import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="fixedHeader">
      <div className="leftHeader">
        <div className="headerTitle">Dribble</div>
        <div className="headerInputContainer">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="headerInput"
          />
          <button className="headerInputButton">
            <div className="shots">Shots</div>
            <span className="headerInputIcon material-symbols-outlined">
              stat_minus_1
            </span>
          </button>
          <button className="headerInputButton2">
            <span class="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className="headerOptions2">
          <button className="headerButton">
            <span>Explore</span>
            <span className="lowerIcon material-symbols-outlined">
              stat_minus_1
            </span>
          </button>
          <button className="headerButton">
            <span>Hire a Designer</span>
            <span className="lowerIcon material-symbols-outlined">
              stat_minus_1
            </span>
          </button>
          <button className="headerButton">Find Jobs</button>
          <button className="headerButton">Blog</button>
        </div>
      </div>
      <div className="rightHeader">
        <button className="headerUgradeButton">Upgrade to Pro</button>
        <button className="headerButton">
          <span class="headerIcon material-symbols-outlined">chat</span>
        </button>
        <button className="headerButton">
          <span class="material-symbols-outlined headerIcon">
            notifications
          </span>
        </button>
        <img
          className="headerProfileButton"
          src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
          alt=""
        />
      </div>
    </div>
  );
}
