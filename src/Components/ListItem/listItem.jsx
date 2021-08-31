import React from "react";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Add from "@material-ui/icons/Add";
import ThumbUp from "@material-ui/icons/ThumbUpOutlined";
import ThumbDown from "@material-ui/icons/ThumbDownOutlined";
import "./ListItem.scss";

const listItem = () => {
  return (
    <div className="listItem">
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUp />
          <ThumbDown />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default listItem;
