import React, { Component } from 'react';
import TopNavBar from "../TopNavbar/TopNavbar";
import BottomNavBar from "../BottomNavbar/BottomNavbar";
import './ChristmasConcert.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import "../photoGallery/photoGallery.css"
export default class ChristmasConcert extends Component {
    constructor(props) {
        super(props);

        
      }
    
    render() {
        return (
            <div>
                        <div>
          <TopNavBar />
        </div>
           {/* <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              <img
                className="concert-img"
                src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996696573-LNPPMWOSJA3I6IZ4CNVJ/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1427.jpg?format=2500w"
              ></img>
              <img
                className="concert-img2"
                src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996728098-K5V611LJBCKZQXO79ONB/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1412.jpg?format=2500w"
              ></img>

              <img
                className="concert-img2"
                src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996749118-9CU5LIT5DV3JI76WJU4H/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1416.jpg?format=2500w"
              ></img>

            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
                
              <img
                className="concert-img3"
                src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996760116-9OR91LHBWFQ4I6YFWQRP/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1415.jpg?format=2500w"
              ></img>
              <img
                className="concert-img4"
                src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996928255-7S1ADWCHKZ2HQCVY05S4/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1418.jpg?format=2500w"
              ></img>
{/* 
              <img
                className="concert-img5"
                src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1577041815286-E9ZHUP2ATWIOJY92ARSZ/ke17ZwdGBToddI8pDm48kFS2K6CMTwglqYnYS3XiKOVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIaWm2KCFOr2vRyRNq442e9Nu2RidXgEmyRpwXTabuKA8KMshLAGzx4R3EDFOm1kBS/BDADA585-09E9-4B59-992B-2B2E621EDD0F.jpeg?format=1000w"
              ></img> */}
              
{/* 
               </div>
                <div class="col-md-12 col-sm-10 col-sm-offset-1">
                <img
                className="concert-img5"
                src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1577041815286-E9ZHUP2ATWIOJY92ARSZ/ke17ZwdGBToddI8pDm48kFS2K6CMTwglqYnYS3XiKOVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIaWm2KCFOr2vRyRNq442e9Nu2RidXgEmyRpwXTabuKA8KMshLAGzx4R3EDFOm1kBS/BDADA585-09E9-4B59-992B-2B2E621EDD0F.jpeg?format=1000w"
              ></img>
              </div> */}
          {/* </div> */}
          {/* </div> */} 

          <div style={{marginTop: "20px"}}>
            <Carousel infiniteLoop autoplay useKeyboardArrows showArrows swipeable stopOnHover="false">
                <div className="image">
                    <img class="center-block" src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996696573-LNPPMWOSJA3I6IZ4CNVJ/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1427.jpg?format=2500w" alt=""/>
                   
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996728098-K5V611LJBCKZQXO79ONB/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1412.jpg?format=2500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996749118-9CU5LIT5DV3JI76WJU4H/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1416.jpg?format=2500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996760116-9OR91LHBWFQ4I6YFWQRP/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1415.jpg?format=2500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1576996928255-7S1ADWCHKZ2HQCVY05S4/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1418.jpg?format=2500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1577041815286-E9ZHUP2ATWIOJY92ARSZ/ke17ZwdGBToddI8pDm48kFS2K6CMTwglqYnYS3XiKOVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIaWm2KCFOr2vRyRNq442e9Nu2RidXgEmyRpwXTabuKA8KMshLAGzx4R3EDFOm1kBS/BDADA585-09E9-4B59-992B-2B2E621EDD0F.jpeg?format=1000w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1577041837993-53D9EWS4KZNYGTZWIIHC/ke17ZwdGBToddI8pDm48kAOk-h8JtrQUe-AWUl21kSsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z21oZdemeC7GK7fjThLS0brwrGGFQ0liXqTLaMTwMVlBKhHAH51QaxKq4KdVMVBxpG/BE436226-3C05-489E-9F11-1846F58FFB63.jpeg?format=1000w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1577041909323-07G9NMRTUGTWRXVZZLEM/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/4F55E560-3BDF-429E-B050-DADFD62765B1.jpeg?format=2500w" alt=""/>
                </div>
                <div className="image">
                    <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1577041940863-DWDS8I95HSEMITJSHE5I/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/D9394825-C629-40C7-B655-6915CAA6B2C7.jpeg?format=2500w" alt=""/>
                </div>

            </Carousel>

        </div>
          <div>
          <BottomNavBar />
        </div>

                
            </div>
        );
    }
};

