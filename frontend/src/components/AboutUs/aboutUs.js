import React, { Component } from 'react';
import LeftNavbar from '../LeftNavbar/LeftNavbar'
import './aboutUs.css'
import TopNavbar from '../TopNavbar/TopNavbar'
import BottomNavbar from '../BottomNavbar/BottomNavbar'

export default class aboutUs extends Component {
    render() {
        return (
            <div>
                <div>
                    <TopNavbar/>
                </div>
                <div className="aboutus-img">
                <img src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1567199041333-KDCS8WPQZ0BMYL7TQV7H/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/dsc0485?format=1000w" >

                </img>
                
                </div>
                <div >
                    <p className="aboutus-text">2019 members</p>
                    <h2 className="aboutus-text-2">About the Almaden Youth Musicians</h2>
                    <p className="aboutus-text-3">Almaden Youth Musicians (AYM) was founded by young musicians in the South San Jose area with the objective of helping the community 
                        through classical music at 2013. In keeping with the philosophy of "Share the love through the music", 
                        our group performs chamber music along with duets, trio, and quartets to elders of local senior centers or local nursing centers. 
                        AYM holds five concerts at senior centers and one benefit concert per year. All proceeds accumulated from the performances are donated 
                        to non-profit organization in honor of helping needed families. 
                        AYM meets twice per month for rehearsals with the joy of making music and having an enjoyable time.</p>
                    <p className="aboutus-text-4">
                    AYM is a non profit organization 501 (c) 3 that certifies the Presidential Volunteer Service Award. 
                    </p>
                    </div>
                    <div>

                    </div>
                <div>
                    <BottomNavbar/>
                </div>
            </div>
        )
    }
}
