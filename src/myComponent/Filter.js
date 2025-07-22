import React from "react";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filterTop">
        <div className="filterLeftTop">
          <button className="FollowingButton">
            <span>Following</span>
            <div className="titleImage"></div>
          </button>
        </div>
        <div className="filterRightTop">
          <button className="FilterButton">
            <div className="titleImage"></div>
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="filterDown">
        <div className="filterLeft">
          <button className="FollowingButton">
            <span>Following</span>
            <span class="titleImage material-symbols-outlined">
              stat_minus_1
            </span>
          </button>
        </div>
        <div className="filterCenter">
          <button className="filterButtons fb9">
            <span>Discover</span>
          </button>
          <button className="filterButtons fb8">
            <span>Animation</span>
          </button>
          <button className="filterButtons fb7">
            <span>Branding</span>
          </button>
          <button className="filterButtons fb6">
            <span>Illustration</span>
          </button>
          <button className="filterButtons fb5">
            <span>Mobile</span>
          </button>
          <button className="filterButtons fb4">
            <span>Print</span>
          </button>
          <button className="filterButtons fb3">
            <span>Product Design</span>
          </button>
          <button className="filterButtons fb2">
            <span>Typography</span>
          </button>
          <button className="filterButtons fb1">
            <span>Web Design</span>
          </button>
        </div>
        <div className="filterRight">
          <button className="FilterButton">
            <span class="titleImage material-symbols-outlined">
              filter_list
            </span>

            <span>Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
