import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/community" element={<Community />} />
          <Route path="/communityDetails" element={<CommunityDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopItemDetails" element={<ShopItemDetails />} />
          <Route path="/art" element={<Art />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
