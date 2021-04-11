import React, { Component } from 'react'
import TopNavbar from '../TopNavbar/TopNavbar'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './leadersOfAym.css';

// import RBCarousel from "react-bootstrap-carousel";
// import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// const styles = { height: 400, width: "100%" };
// const icon_glass = <span className="glyphicon glyphicon-glass" />;
// const icon_music = <span className="glyphicon glyphicon-music" />;

export default class leadersOfAym extends Component {

    // constructor(props) {
    //     super(props);
    //     this.slider = React.createRef();
    //     this.state = {
    //       autoplay: true,
    //     };
    //   }
    //   _onSelect = (active, direction) => {
    //     console.log(`active=${active} && direction=${direction}`);
    //   };
    //   _visiableOnSelect = (active) => {
    //     console.log(`visiable onSelect active=${active}`);
    //   };
    //   _slideNext = () => {
    //     this.slider.current.slideNext();
    //   };
    //   _slidePrev = () => {
    //     this.slider.current.slidePrev();
    //   };
    //   _goToSlide = () => {
    //     this.slider.current.goToSlide(1);
    //   };
    //   _autoplay = () => {
    //     this.setState({ autoplay: !this.state.autoplay });
    //   };
    //   _changeIcon = () => {
    //     let { leftIcon, rightIcon } = this.state;
    //     leftIcon = leftIcon ? undefined : icon_glass;
    //     rightIcon = rightIcon ? undefined : icon_music;
    //     this.setState({ leftIcon, rightIcon });
    //   };
    render() {
        return (
            <div>
                <div>
                    <TopNavbar/>
                </div>
                {/* <Container>
                    <Row>
                        <Col>
                <div className="leadersOfAym-img">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156602777-K1YJGBAQDVOG8XZGW4TL/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/me.jpg?format=500w" >

                    </img>
                </div>
                </Col>
                <Col>
                <div className="leadersOfAym-img">
                    <img className="lead" src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156577156-T7ZAH6WAXLP8D763VMNG/ke17ZwdGBToddI8pDm48kFfQLPSMlIsQEXHyr4oq9wtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx5b3_gvnuxdEB0X_Pm7cH9Ox9IIkkoYLVjKfJk6re8uU0tk8X1aLs0vDPDHTW4tSU/image0.jpg?format=500w" >
                        
                    </img>
                </div>
                </Col>
                </Row>
                <Row>
                        <Col>
                <div className="leadersOfAym-img">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156602777-K1YJGBAQDVOG8XZGW4TL/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/me.jpg?format=500w" >

                    </img>
                </div>
                </Col>
                <Col>
                <div className="leadersOfAym-img">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156577156-T7ZAH6WAXLP8D763VMNG/ke17ZwdGBToddI8pDm48kFfQLPSMlIsQEXHyr4oq9wtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx5b3_gvnuxdEB0X_Pm7cH9Ox9IIkkoYLVjKfJk6re8uU0tk8X1aLs0vDPDHTW4tSU/image0.jpg?format=500w" >
                        
                    </img>
                </div>
                </Col>
                </Row>
                </Container> */}
{/* <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
        <Col span={12} style={{ marginTop: 20 }}>
<RBCarousel className="carousel-fade">
              <div style={{ ...styles, backgroundColor: "darkcyan" }}>
                <div className="carousel-center">
                  This carsouel transition is fade
                </div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
                <span className="carousel-center">
                  This carsouel transition is fade
                </span>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
            </Col>
            </Row>
            </div> */}
            <div class="container">
  <div class="row">
    <div class="col" className="leadersOfAym-img"><img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156602777-K1YJGBAQDVOG8XZGW4TL/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/me.jpg?format=500w"></img></div>
    <div class="col" className="leadersOfAym-img2"><img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156577156-T7ZAH6WAXLP8D763VMNG/ke17ZwdGBToddI8pDm48kFfQLPSMlIsQEXHyr4oq9wtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx5b3_gvnuxdEB0X_Pm7cH9Ox9IIkkoYLVjKfJk6re8uU0tk8X1aLs0vDPDHTW4tSU/image0.jpg?format=500w"></img></div>
    
    <div class="w-100"></div>
    <div class="col" className="leadersOfAym-img-text">Andrew Kang (president)</div>
    <div class="col" className="leadersOfAym-img-text2">Jisung Kang (vice president)</div>

    <div class="col" className="leadersOfAym-img"><img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156820840-16I9SG0C2ZZVF55BFVFA/ke17ZwdGBToddI8pDm48kAsx5aX-ErkU8pwsoODhBy57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaHJ0CCIp0h94CjFWATtzuqoo3Zwx1aYF9K-NOvGM5KsEhJtza6QMhgrGM_t7OTIY/Kim_Minji%2B%25281%2529.jpg?format=500w"></img></div>
    <div class="col" className="leadersOfAym-img2"><img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156622966-NYZH71P5TARU9VGW6AWF/ke17ZwdGBToddI8pDm48kIh2okw8xGqRDL_LP01gkf8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2X3AHjIuqhy6ThnBRdcnql5mwKyBZ77EeZCgsCiNBbbehHAH51QaxKq4KdVMVBxpG/luke_profile_pic.jpg?format=500w"></img></div>
    
    <div class="w-100"></div>
    <div class="col" className="leadersOfAym-img-text">Minji Kim (Concert Master)</div>
    <div class="col" className="leadersOfAym-img-text2">Luke Nam (vice president)</div>

    <div class="col" className="leadersOfAym-img"><img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156844408-EAP3UKQ7FI127P1SDXYN/ke17ZwdGBToddI8pDm48kDbfwLFyiSz1aODX7BAtHzB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmCZdxe8RUVMtthf0J1VwZ7pM9Ms8-2_ZXf1lG9I4f9KxzgrnAEN61foMaxExx4-_l/unnamed%2B%25281%2529.jpg?format=500w"></img></div>
    <div class="col" className="leadersOfAym-img2"><img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1592156872202-MVD781TSFKTGWE4Y6MBG/ke17ZwdGBToddI8pDm48kIozgSQET_wMpHyinv9V3Jh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcMNx6EpdBw4ORC00IVUjS-uqeQtwAttt6Sw8RYDrbqc6054DuOAK9bYMlbZfjaYAQ/unnamed%2B%25282%2529.jpg?format=500w"></img></div>
    
    <div class="w-100"></div>
    <div class="col" className="leadersOfAym-img-text">Jennifer Lee (Secretary)</div>
    <div class="col" className="leadersOfAym-img-text2">Juho Jeon (Historian)</div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
                <div>
                    <BottomNavbar/>
                </div>
                
                
            </div>
        )
    }
}
