import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../src/index.css';
import App from './containers/App';
import AuctionPage from './containers/AuctionPage'
import BuyPage from './containers/BuyPage'
import SellPage from './containers/SellPage'
import * as serviceWorker from './serviceWorker';
import Notfound from './containers/NotFound';
import Footer from './components/Footer'
import Menu from './components/Menu'
import {AppWrapper, HomeWrapper} from './containers/styledComponents'
const routing = (
    <Router>
        <AppWrapper>
            <HomeWrapper id="homePageWrapper">
            <Menu />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/auction" component={AuctionPage} />
                    <Route path="/buy" component={BuyPage} />
                    <Route path="/sell" component={SellPage} />
                    <Route component={Notfound} />
                </Switch>
                <Footer />
            </HomeWrapper>
        </AppWrapper>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
