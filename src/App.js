import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Discover from './Discover';
import EventDetails from './EventDetails';
import Community from './Community';
import CommunityDetails from './CommunityDetails';
import Shop from './Shop';
import ShopItemDetails from './ShopItemDetails';
import Profile from './Profile';
import Art from './Art';
import Artist from './Artist';

function App() {
  return (
    <Router basename='/artconnect1'>
      <Switch>
        <Route exact path="/artconnect1/" component={Home} />
        <Route path="/artconnect1/discover" component={Discover} />
        <Route path="/artconnect1/eventDetails" component={EventDetails} />
        <Route exact path="/artconnect1/community" component={Community} />
        <Route exact path="/communityDetails" component={CommunityDetails} />
        <Route exact path="/artconnect1/shop" component={Shop} />
        <Route exact path="/artconnect1/shopItemDetails" component={ShopItemDetails} />
        <Route path="/artconnect1/art" component={Art} />
        <Route path="/artconnect1/artist" component={Artist} />
        <Route path="/artconnect1/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
