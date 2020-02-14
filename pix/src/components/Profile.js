import React from "react";
import "./Navigation.css";

import Button from "@material-ui/core/Button";

const profile = () => {
  return (
    //The Whole Background for the page.
    <div class="profile">
      {/*This is the main profile layout that contains different divs for different parts*/}
      <div id="profile" class="root">
        {/*This is where the profile picture, name, Bio will be found.*/}
        <div id="profile" class="proPic">
          <div id="proPic" class="logout">
            <Button variant="contained" color="primary" position="center">
              Logout
            </Button>
          </div>
        </div>
        {/*User information*/}
        <div id="profile" class="proInfo">
          Number of followers, # of posts, # following
        </div>
        {/*Pictures Grid*/}
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
          >
            <img
              src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png"
              alt="Cinque Terre"
              width="600"
              height="400"
            ></img>
          </a>
          <div class="desc">PICTURE ONE</div>
        </div>
      </div>
    </div>
  );
};

export default profile;
