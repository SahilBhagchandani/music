import React, { Component } from "react";
import TopNavBar from "../TopNavbar/TopNavbar";
import BottomNavBar from "../BottomNavbar/BottomNavbar";
import "./monthlyNewsletter.css";

export default class monthlyNewsletter extends Component {
  render() {
    return (
      <div>
        <div>
          <TopNavBar />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              <center>
                {" "}
                <p className="news-text">
                  <b>General Outline of the Year</b>
                </p>
              </center>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              
                <p className="news-text-2">
                  <b>December</b>
                </p>
             
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              
                <ul  class="no-bullets">
                    <li><b>Lessons:</b></li>
                </ul>
             
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              
                <ul  class="bullets">
                    <li style={{marginTop: "9px"}}>No group plan; individual lessons only</li>
                    <li style={{marginTop: "9px"}}>Spaces are first come first serve</li>
                    <li style={{marginTop: "9px"}}>Lessons start from December 28 to April 30</li>
                    <li style={{marginTop: "9px"}}>Starts with teaching elementary schoolers</li>
                    <li style={{marginTop: "9px"}}>Best mentors in AYM will be given an award and scholarship ($100); Award name is “Mentor of the Year.” This will be given at the end of all the mentoring.</li>
                </ul>
             
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              
                <ul  class="no-bullets">
                    <li><b>Performances:</b></li>
                </ul>
             
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              
                <ul  class="bullets">
                    <li style={{marginTop: "9px"}}>After April 30, we will make a virtual concert</li>
                    <li style={{marginTop: "9px"}}>Possible solo performances if things get worse</li>
                    <li style={{marginTop: "9px"}}>Possible group performances as well though</li>
                </ul>
             
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              
                <ul  class="no-bullets">
                    <li><b>Miscellaneous::</b></li>
                </ul>
             
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              
                <ul  class="bullets">
                    <li style={{marginTop: "9px"}}>Find people to take classes for photoshop/video editing; these people will receive volunteer hours</li>
                </ul>
             
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <BottomNavBar />
        </div>
      </div>
    );
  }
}
