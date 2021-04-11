import React, { Component, useEffect } from "react";
import { Image } from "react-bootstrap";
// import background from '../../img/background.png'
import "./home.css";
import img from "../../img/background.png";
import TopNavBar from "../TopNavbar/TopNavbar";
import BottomNavBar from "../BottomNavbar/BottomNavbar";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Carousel } from 'react-bootstrap';
import YouTube from "react-youtube";
// function home() {

//      const responseSuccessGoogle = (response) =>{
//          console.log(response);
//          console.log('name'+ response.tokenId);
//          console.log("USERname"+ response.profileObj.givenName);
//          localStorage.setItem("username", response.profileObj.givenName);
//          axios({
//              method: "POST",
//              url: "http://localhost:3001/api/googlelogin",
//              data: {tokenId: response.tokenId}
//          }).then(response =>{

//          })

//      }
//     //  useEffect(() => {
//     //    const a = localStorage.getItem("username");
//     //    console.log(a);
//     //  });

//      const responseErrorGoogle = (response) =>{

//     }

//     return (
//       <div>
//         <div>
//           <TopNavBar />
//         </div>

//         <div className="bg-image">
//           {/* <img src="../../img/background.png"></img>
//                 <Image
//                   style={background} responsive
//                   src="">
//                 </Image> */}
//           <div className="centered">
//             <div className="home-text-3">
//               <p>
//                 <i>Share the love through music</i>
//               </p>
//             </div>
//             <div className="home-text">
//               <p>
//                 <b>ALMADEN YOUTH</b>
//               </p>
//             </div>
//             <div className="home-text-2">
//               <p>
//                 <b>MUSICIANS</b>
//               </p>
//             </div>
//             <div>
//               <GoogleLogin
//                 clientId="442136040847-7hd661tvopnum3aqpu8ik7l2n827m91c.apps.googleusercontent.com"
//                 buttonText="Login with Google"
//                 onSuccess={responseSuccessGoogle}
//                 onFailure={responseErrorGoogle}
//                 cookiePolicy={"single_host_origin"}
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <BottomNavBar />
//         </div>
//       </div>
//     );
//   }

// export default home

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.signup = this

    //   .signup

    //   .bind(this);
  }

  onReady = (event) => {
    event.target.pauseVideo();
  };
  signup(res) {
    const googleresponse = {
      tokenId: res.tokenId
      // Name: res.profileObj.name,

      // email: res.profileObj.email,

      // token: res.googleId,

      // Image: res.profileObj.imageUrl,

      // ProviderId: "Google",
    };
    const user ={
      Name: res.profileObj.name
    }
    localStorage.setItem("username2", res.profileObj.name)

    axios
      .post("http://localhost:3001/api/googlelogin", googleresponse)

      .then((result) => {
        let responseJson = result;

        sessionStorage.setItem("userData", JSON.stringify(result));
      });
      
  }
  render() {
    const responseSuccessGoogle = (response) => {
      console.log(response);

      var res = response.profileObj;

      console.log(res);

      this.signup(response);
      window.location.reload(false);
    }
    
    const responseErrorGoogle = (response)=>{

    }

    const opts = {
      height: "900",
      width: "1800",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
      return (
        <div>
          <div>
            <div>
              <TopNavBar />
            </div>

            <div className="bg-image">
              {/* <img src="../../img/background.png"></img>
                 <Image 
                 style={background} responsive 
                   src="">
                 </Image> */}
              <div className="centered">
                <div className="home-text-3">
                  <p>
                    <i>Share the love through music</i>
                  </p>
                </div>
                <div className="home-text">
                  <p>
                    <b>ALMADEN YOUTH</b>
                  </p>
                </div>
                <div className="home-text-2">
                  <p>
                    <b>MUSICIANS</b>
                  </p>
                </div>
                {/* <div>
                  <GoogleLogin
                    clientId="442136040847-7hd661tvopnum3aqpu8ik7l2n827m91c.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div> */}
              </div>
            </div>
            <br></br>

            <div className='container-fluid' >
                    <div className="row">
                        <div className="col-lg-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785681779-VF4JL2I1M1LIJ4NNKF71/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_0723-2.jpg?format=1500w"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>2019 Brookdale senior center</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785589132-WQ5DRQU9MV3ESAGXF31E/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/43512648160_6576b2d778_o-4.jpg?format=1500w"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>2018 Benefit Concert</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475785511398-Z72RY3E8P0ZG8ZZAHADC/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=1500w"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            <div>
              <BottomNavBar />
            </div>
          </div>
        </div>
      );
    };
  }

