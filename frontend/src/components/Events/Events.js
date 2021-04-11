import React, { Component } from "react";
import TopNavBar from "../TopNavbar/TopNavbar";
import BottomNavBar from "../BottomNavbar/BottomNavbar";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";
import "./Events.css";

export default class Events extends Component {
  onReady = (event) => {
    event.target.pauseVideo();
  };
  render() {
    const opts = {
      height: "500",
      width: "900",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <div>
        <div>
          <TopNavBar />
        </div>
        <div className="container-div">
          <div>
            <img
              className="events-img"
              src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1597185587335-0LOUC7CLJ8M2MI6WBWIS/ke17ZwdGBToddI8pDm48kJ-cG44mKTTx6u25qmD3cW4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcHzilmmQLvpCrAdjn_H4tTLd1XS1UYyrXPU2zirkysjw2VbDr5zwm151NZn9gDqe9/newHeader.png?format=1500w"
            ></img>
          </div>
        </div>
        <div className="container-div">
          <YouTube videoId="eRXU1n_S7RI" opts={opts} onReady={this._onReady} />
        </div>
        <div className="events-text">
            <p>2020 Fall Virtual Benefit Concert</p>
        </div>
        <div>
            <b><hr className="events-line"></hr></b>
        </div>
        <div className="container-div">
          <YouTube videoId="_Yzhougjyfw" opts={opts} onReady={this._onReady} />
        </div>
        <div className="events-text">
            <p>Fundraising total: $1500</p>
            <br></br>
           <p>Beneficiary: Equal Rights Initiative</p>
        </div>
        <div>
            <b><hr className="events-line"></hr></b>
        </div>

        <div className="container-div">
          <YouTube videoId="EIsfmtmYD0I" opts={opts} onReady={this._onReady} />
        </div>
        <div className="events-text">
            <p>Fundraising total: $1500</p>
            <br></br>
           <p>Beneficiary: Kaiser Permanente Hospital Covid 19 patients</p>
        </div>
        <div>
            <b><hr className="events-line"></hr></b>
        </div>
        <div className="container-div">
        <p className="events-text-2"><b>2019 Benefit Concert</b></p>
        </div>
        <div className="container-div">
            
          <div>
            <img
              className="events-img-2"
              src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1596828699047-YFFKH5RLUQH8IST4U45S/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/4.poster_2019_final.jpg?format=1500w"
            ></img>
          </div>
        </div>
        <div className="events-text">
            <p>Fundraising total: $3000</p>
            <br></br>
           <p>Beneficiary: Lucile Packard Children’s Hospital</p>
        </div>

        <div>
            <b><hr className="events-line"></hr></b>
        </div>
        <div className="container-div">
        <p className="events-text-2"><b>2018 Benefit Concert</b></p>
        </div>
        <div className="container-div">
            
          <div>
            <img
              className="events-img-2"
              src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1596828874418-UV65TUZ1PHW0ZNA9YGCA/ke17ZwdGBToddI8pDm48kHkyDq_azneb-S6evnUZDDQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdK6PLIjsWuyjoxF2mUZNuEOWMZrk4ODrkZw0T53xwkk2Xlo2lHU7IfbgDdfVtQBeuw/3.2018_poster.jpg?format=1500w"
            ></img>
          </div>
        </div>
        <div className="events-text">
            <p>Fundraising total: $3000</p>
            <br></br>
           <p>Beneficiary: Guiding Light Project (www.guidinglightproject.com)</p>
        </div>

        <div>
            <b><hr className="events-line"></hr></b>
        </div>
        <div className="container-div">
        <p className="events-text-2"><b>2017 Benefit Concert</b></p>
        </div>
        <div className="container-div">
            
          <div>
            <img
              className="events-img-2"
              src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1596829022931-9PQW6703MNZHZEPXSFDD/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/2.2017_poster.jpg?format=1500w"
            ></img>
          </div>
        </div>

        <div>
            <b><hr className="events-line"></hr></b>
        </div>
        <div className="container-div">
        <p className="events-text-2"><b>2016 Benefit Concert</b></p>
        </div>
        <div className="container-div">
            
          <div>
            <img
              className="events-img-2"
              src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1596830426964-UONB27NMT4AZNVAVNL1U/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/1.2016_poster.jpg?format=1500w"
            ></img>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>




        <div>
          <BottomNavBar />
        </div>
      </div>
    );
  }
}
