import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import TopNavbar from './TopNavbar/TopNavbar'
import Home from './home/home'
import photoGallery from './photoGallery/photoGallery'
import aboutUs from './AboutUs/aboutUs'
import leadersOfAym from './leadersOfAym/leadersOfAym'
import membersReflection from './membersReflection/membersReflection'
import Account from './Account/Account'
import Events from './Events/Events'
import ChristmasConcert from './ChristmasConcert/ChristmasConcert'
import Donate from './Donate/Donate'
import MonthlyNewsletter from './monthlyNewsletter/monthlyNewsletter'
import ContactUs from './contactUs/contactUs'

export default class main extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/photoGallery" component={photoGallery}/>
                <Route path="/topNavbar" component={TopNavbar}/>
                <Route path="/aboutUs" component={aboutUs}/>
                <Route path="/leadersOfAym" component={leadersOfAym}/>
                <Route path="/membersReflection" component={membersReflection}/>
                <Route path="/account" component={Account}/>
                <Route path="/events" component={Events}/>
                <Route path="/christmasConcert" component={ChristmasConcert}/>
                <Route path="/donate" component={Donate}/>
                <Route path="/monthlyNewsletter" component={MonthlyNewsletter}/>
                <Route path="/contactUs" component={ContactUs}/>
                

                
            </div>
        )
    }
}
