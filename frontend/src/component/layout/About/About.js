import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';;

const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/Tamalcs123";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tamal/image/upload/v1644898760/avatars/muhbh7o6z39tfjbcehyf.jpg"
              alt="Founder"
            />
            <Typography>Tamal Naskar</Typography>
            <Button onClick={visitGithub} color="primary">
              Visit GitHub
            </Button>
            <span>
              This is a sample ecommerce wesbite made by @metamalnaskar.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect With Me</Typography>
            <a
              href="https://www.linkedin.com/in/tamal-naskar-97a652218/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://github.com/Tamalcs123" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
