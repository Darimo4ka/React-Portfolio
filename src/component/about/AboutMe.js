import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutMe = () => {
    return (
      <div className="aboutme">
        <div className="container">
          <img src="images/tiger-face.png" alt="tiger"></img>
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">I am learning!</p>
            </div>
            <div className="col-lg-4 me-auto">
              <h4 className="lead">What I know:</h4>
              <ul className="list-group">
                <li className="list-group-item bg-transparent text-blue">
                  Javascript, SQL,React, CSS,  HTML
                </li>

                <li className="list-group-item bg-transparent text-blue">
                  GitHub, Heroku.
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- About Section Button--> */}
          <div className="text-center mt-4">
            <a
              className="btn btn-xl btn-outline-dark"
              href="https://github.com/Darimo4ka">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default AboutMe;