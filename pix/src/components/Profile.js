
import React from "react";
import "./Navigation.css";

import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// I imported this class from @material-ui in order to modify the size and position of the profile picture
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(6),
  },
  large: {
    width: theme.spacing(19),
    height: theme.spacing(19),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(6),
    
  },

  proName:
  {
    fontSize: "28px",
    textAlign: "left",
    textIndent: "50px",
        marginTop: theme.spacing(7),
  },

  numOfPosts: 
  {
    fontSize:"15px",
    marginTop: theme.spacing(4),
  },




}));


export default function ImageAvatars() {
  const classes = useStyles();
  return (
    //The Whole Background for the page.
    <div class="profile">
      {/*This is the main profile layout that contains different divs for different parts*/}
      <div id="profile" class="root">
        {/*This is where the profile picture, name, Bio will be found.*/}
        <div id="profile" class="proPic">

          <div className= {classes.root} >

          {/* This is where the profile Picture is located*/}
          <Avatar alt="Profile Picture" src="https://pixtvusa.com/wp-content/uploads/2018/01/pixgalpixtvusa.png" className={classes.large} />
                  
                    {/*User information*/}
                    
            <div id= "profile" class="proName" className={classes.proName}> 
            Profile Name <br/>
                <div id="profile" className={classes.numOfPosts} >
                  # of posts &emsp;
                    <div id="profile" style={{display: 'inline-block'}} >
                    # of followers &emsp;&emsp;
                    </div>
                    <div id="profile" style= {{display: 'inline-block'}}>
                   # following
                  </div>
                </div>
               
             
            </div>
            
           
           

          <Button variant="contained" color="primary" className={classes.small}>
            Logout
          </Button>

          
          
          </div>
         
         
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




