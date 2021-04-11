import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "infinite-react-carousel";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import TopNavBar from "../TopNavbar/TopNavbar";
import BottomNavBar from "../BottomNavbar/BottomNavbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./photoGallery.css"
export default class photoGallery extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      shift: 1,
      wheel: true,
    };
    return (
      <div>
        <div>
          <TopNavBar />
        </div>
        <div style={{marginTop: "20px"}}>
            <Carousel infiniteLoop autoplay useKeyboardArrows showArrows swipeable stopOnHover="false">
                <div className="image">
                    <img class="center-block" src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785589132-WQ5DRQU9MV3ESAGXF31E/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/43512648160_6576b2d778_o-4.jpg?format=1500w" alt=""/>
                   
                </div>
                <div className="image" class="img-responsive center-block">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320286814-PG4SSTWE4FQ272DII31Q/ke17ZwdGBToddI8pDm48kIcwviLnEcF2I5MiI-cikGtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwMfNtGUS2wWKnAGfusYLnuFoG6fg7tpm7eDnFbP8zWpi-JsHi0BkBwlZFnnSfw_kE/IMG_0524.jpg?format=1000w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1567200857725-JNPDJOK8F1TPHFKWONA1/ke17ZwdGBToddI8pDm48kCiC6x0kNpxliGpzQTkOLNUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2ppk8fIk4OUdzzAJ58dNz9ksAnbOUWC6fgQEHg0Bz14hkOpdljO7Z-5qh0zg85Jnj/IMG_0380.JPG?format=1000w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785681779-VF4JL2I1M1LIJ4NNKF71/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_0723-2.jpg?format=1500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785570550-SMXD8AKV9BTUQDL4Q0PV/ke17ZwdGBToddI8pDm48kMdxkVrd1D4iekyq9jtHH7hZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIzH_Qo3z2GZyWy7YLNeUWn1jRnWU9YlcYeD8x2zNSMHkKMshLAGzx4R3EDFOm1kBS/dsc_0161_45278961472_o_r1-3.jpg?format=1000w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320254728-GQHP4UXC2IO54LYBNVII/ke17ZwdGBToddI8pDm48kLRNNcIENFxEQKOcxbrZRTNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw2_ddoymeMlxjI-JY2suQEg5oVW6Qs4UuFZSc--2I-0maYxsjBED98syUv6GM21aw/IMG_0482.jpg?format=1000w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475609410955-8TUF67WH51QD0U35AGX9/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/DSC_0001.JPG?format=750w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475609437555-7G5HS24PE6QR0UKNQD0D/ke17ZwdGBToddI8pDm48kDk1dm1oSR9gCa1mX4KqzjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luj0xCD0oh5KMc0gpox0u-wQWxfQHg04OxgQwaUq2yiAcNt5Kg2tE9yEtYfM4xwaw/DSC_0033.JPG?format=750w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475735337789-VPAOMYOZ9O8TWX13E6XZ/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_0836.JPG?format=750w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475735470061-KQOK7DB0YB2843EOH3H0/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/image-asset.jpeg?format=750w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475783496433-6A57MDLIM93ER7SRAHG3/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/image-asset.jpeg?format=750w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475609841556-1UBEIQYBK6DE5JRA2DBG/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_0844.jpg?format=500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475783721709-8Z33YEGCH5J7RBT3CI1V/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/2014%2C+Seeds+of+empowerment%2C+Stanford+University?format=750w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475785117972-P5FSJ5MJOMOJ1HYE7GGQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=1500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1475785511398-Z72RY3E8P0ZG8ZZAHADC/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=1500w" alt=""/>
                </div>
            </Carousel>

        </div>
        {/* <div style={{ height: "1200px", alignContent:"center", justifyItems: "center"}}>
        <Carousel style={{}}>
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320254728-GQHP4UXC2IO54LYBNVII/ke17ZwdGBToddI8pDm48kLRNNcIENFxEQKOcxbrZRTNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw2_ddoymeMlxjI-JY2suQEg5oVW6Qs4UuFZSc--2I-0maYxsjBED98syUv6GM21aw/IMG_0482.jpg?format=1000w" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320254728-GQHP4UXC2IO54LYBNVII/ke17ZwdGBToddI8pDm48kLRNNcIENFxEQKOcxbrZRTNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw2_ddoymeMlxjI-JY2suQEg5oVW6Qs4UuFZSc--2I-0maYxsjBED98syUv6GM21aw/IMG_0482.jpg?format=1000w" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320254728-GQHP4UXC2IO54LYBNVII/ke17ZwdGBToddI8pDm48kLRNNcIENFxEQKOcxbrZRTNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw2_ddoymeMlxjI-JY2suQEg5oVW6Qs4UuFZSc--2I-0maYxsjBED98syUv6GM21aw/IMG_0482.jpg?format=1000w" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        </div> */}
        <div>
          <BottomNavBar />
        </div>
      </div>
    );
  }
}
