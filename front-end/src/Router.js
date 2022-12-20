
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import CampaignBuilder from './Pages/CampaignBuilder';
import Donate from './Pages/Donate';
import ThankYou from './Pages/ThankYou';

class Router extends Component {
    render() {
        return (
                <Switch>
                    <Route path='/' exact component={Home}  />
                    <Route path='/Campaigns' component={CampaignBuilder} />
                    <Route path='/Donate/:id' component={Donate} />
                    <Route path='/ThankYou' component={ThankYou} />
                </Switch>
        );
    }
}

export default Router;