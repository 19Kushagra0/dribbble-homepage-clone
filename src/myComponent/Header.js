import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [exploreModal, setExploreModal] = useState(true);
  return (
    <div className="header">
      <div className="leftHeader">
        <div className="headerTitle">Dribble</div>
        <div className="headerOptions">
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
      <div className="cover"></div>
      <div className="exploreModal">
        <button className="exploreModalButton">
          <div className="lowerIcon"></div>
          <span>Following</span>
        </button>
        <button className="exploreModalButton">
          <div className="lowerIcon"></div>
          <span>Popular</span>
        </button>
        <button className="exploreModalButton">
          <div className="lowerIcon"></div>
          <span>New and Noteworthy</span>
        </button>
        <hr />
        <button className="exploreModalButton">
          <span>Product Design</span>
        </button>
        <button className="exploreModalButton">
          <span>Web Design</span>
        </button>
        <button className="exploreModalButton">
          <span>Animation</span>
        </button>
        <button className="exploreModalButton">
          <span>Branding</span>
        </button>
        <button className="exploreModalButton">
          <span>Illustration</span>
        </button>
        <button className="exploreModalButton">
          <span>Mobile</span>
        </button>
        <button className="exploreModalButton">
          <span>Typography</span>
        </button>
        <button className="exploreModalButton">
          <span>Print</span>
        </button>
      </div>
    </div>
  );
}
