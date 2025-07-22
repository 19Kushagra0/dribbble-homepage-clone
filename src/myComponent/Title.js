import React from "react";
import "./Title.css";

export default function Title() {
  return (
    <div className="title">
      <div className="leftTitle">
        <span className="bigTitle">
          Discover the
          <br />
          World's Top Designers
        </span>

        <br />

        <span className="titleDiscription">
          Explore work from the most talented and accomplished designers ready
          to take on your next project.
        </span>

        <div className="titleButtons">
          <button className="titleButton">
            <span class="titleImage material-symbols-outlined">photo</span>
            Shots
          </button>
          <button className="titleButton">
            <span class="titleImage material-symbols-outlined">
              supervisor_account
            </span>
            Designers
          </button>
          <button className="titleButton">
            <span class="titleImage material-symbols-outlined">add_notes</span>
            Services
          </button>
        </div>

        <div className="titleInputContainer">
          <input
            placeholder="What type of design are you inntrested in?"
            className="titleInput"
            type="text"
          />
          <button className="titleInputButton">
            <div className="titleInputImageContainer">
              <span class="searchWhite titleInputImage material-symbols-outlined">
                search
              </span>
            </div>
          </button>
        </div>

        <div className="titleInputRecomendations">
          <span className="InputRecomendationText tb7">Popular: </span>
          <button className="InputRecomendationButton tb6">dashboard</button>
          <button className="InputRecomendationButton tb5">landing page</button>
          <button className="InputRecomendationButton tb4">e-commerce</button>
          <button className="InputRecomendationButton tb3">logo</button>
          <button className="InputRecomendationButton tb2">card</button>
          <button className="InputRecomendationButton tb1">icons</button>
        </div>
      </div>
      <div className="rightTitle">
        <div className="videoContainer">
          {/* <button className="pausePlayButton">
            <div className="videoButton"></div>
          </button> */}
          <video
            className="titleVideo"
            src="https://cdn.dribbble.com/uploads/63538/original/f8b537462943bb7561721f48dec7bce3.mp4?1750255244"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}
