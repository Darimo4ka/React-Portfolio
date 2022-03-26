import React from "react";
import "./footer.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div class="col-lg-4 mb-5 mb-lg-0">
        <a href="https://www.linkedin.com/in/darimabadmatsyrenova/">
          <LinkedInIcon />
        </a>

        <a href="https://github.com/Darimo4ka">
          <GitHubIcon />
        </a>

        <a href="https://www.instagram.com/darimachoy/">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
  }

/*(Maybe use this tag to create pics so will see in the future)
 <a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a> */

export default Footer;
