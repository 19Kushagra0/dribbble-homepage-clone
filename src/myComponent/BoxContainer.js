// import React from "react";
import React, { useEffect } from "react";

import "./BoxContainer.css";

export default function BoxContainer() {
  useEffect(() => {
    const video = document.querySelector(".boxImage");
    if (video) {
      setTimeout(() => {
        video.play().catch((e) => {
          console.warn("Video play blocked:", e);
        });
      }, 100);
    }
  }, []);
  return (
    <div className="boxContainer">
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/44166564/file/original-837eb2ff4f0aa2eb4eac69936bb67651.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Liquid glass switch</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/43676749/file/original-b042b92f4aa046fcd838685185e2f0a7.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span> Logo Liquid Glass Animation</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/18023100/file/original-254ee96c92f4657720fc35dbb6d9cff9.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Liquid AI sphere by Gleb Kuznetsov</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/16887899/file/original-1d8c4d1db42048a52e787c06850a0bfb.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Liquid glass</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/36866936/file/original-a3d3446248217aec90c1b60694956943.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Liquid AI sphere</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/44188483/file/original-19bdf68bd303ea9fe043f35b20ac6d6d.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>E + Leaf Logo Animation</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/25878115/file/original-a6a15f4beef8f491a00377d2b730a83b.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Playtech Animated Icons - Privacy</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/10576208/file/original-4cc5535e19d757a4fcb429c79ff2e0cd.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>GradientWave Animated Icons</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/24935891/file/original-3ba52824642d014f4c2fe188fc12a9be.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Playtech Animated Icons - Data</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/43849180/file/original-b33d041b49fd5ec514efb90d3a0a541a.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Budbo coin Landing page 3D animation icons</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/39514177/file/original-e46ac45359b40c635d53a96b3dcea4cf.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>Fancy Design landing page 3D animation ice cream Icons</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="topBox">
          <video
            src="https://cdn.dribbble.com/userupload/43095420/file/original-f792719d0519f45a3a026249f6922c53.mp4"
            className="boxImage"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0; // optional: reset to start
            }}
            muted
            loop
            playsInline
          ></video>
          <div className="boxIconContainer">
            <span>AiAf Agents 3D Landing page animation ai agent icons</span>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                bookmark
              </span>
            </button>
            <button className="boxButton">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBoxContainer1">
            <img
              className="boxIconImage"
              src="https://lh3.googleusercontent.com/a/ACg8ocJkP3vpWwOZqPIfNlLiS5taaZHPVZY1oWdbOSCu2friCRWV1w=s96-c"
              alt=""
            />

            <span>Design Title</span>
            <button className="bottomBox-button1">Team</button>
          </div>
          <div className="bottomBoxContainer2">
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                favorite
              </span>
            </button>
            <span>number</span>
            <button className="bottomBox-button2">
              <span class="boxIconImage material-symbols-outlined">
                visibility
              </span>
            </button>
            <span>number</span>
          </div>
        </div>
      </div>
    </div>
  );
}
