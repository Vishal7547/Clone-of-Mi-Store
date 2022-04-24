import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreNavbar from './Component/PreNavbar'
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Offers from './Component/Offers';
import Heading from './Component/Heading';
import StarProduct from './Component/StarProduct';
import HotAccessoriesMenu from './Component/HotAccessoriesMenu';
import Musics from './Component/Musics';
import SmartDevice from './Component/SmartDevice';
import Home from './Component/Home';
import Lifestyle from './Component/LifeStyle';
import MobileAccessories from './Component/MobileAccessories';
import ProductReview from './Component/ProductReview';
import Video from './Component/Video';
import SliderEnd from './Component/SliderEnd';
import PreFooter from './Component/PreFooter';
import PreFooterSecond from './Component/PreFooterSecond';
import Footer from './Component/Footer';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {banner} from './Datas/data.json'
import {offer} from './Datas/data.json'
import {starProduct} from './Datas/data.json'
import {hotAccessoriesCover} from './Datas/data.json'
import {hotAccessories} from './Datas/data.json'
import {productReviews} from './Datas/data.json'
import {videos} from './Datas/data.json'


function App() {
  return (
    <Router >
   
     < PreNavbar />
     <Navbar />
     <Slider start={banner.start} />
     <Offers offer={offer} />
     < Heading heading ='STAR PRODUCTS' />
     < StarProduct product={starProduct} />
     < Heading heading ='HOT ACCESSORIES' />
     <HotAccessoriesMenu />
     <Routes>
     <Route exact path="/music" element={<Musics Song={hotAccessoriesCover.music} SongMusic={hotAccessories.music}/>}></Route>
      <Route exact path="/smartDevice" element={<SmartDevice Song={hotAccessoriesCover.smartDevice} SongMusic={hotAccessories.smartDevice}/>}></Route>
     <Route exact path="/home" element={<Home Song={hotAccessoriesCover.home} SongMusic={hotAccessories.home}/>}></Route>
     <Route exact path="/lifestyle" element={<Lifestyle Song={hotAccessoriesCover.lifestyle} SongMusic={hotAccessories.lifestyle}/>}></Route>
     <Route exact path="/mobileAccessories" element={<MobileAccessories Song={hotAccessoriesCover.mobileAccessories} SongMusic={hotAccessories.mobileAccessories}/>}></Route> 
     </Routes>
     < Heading heading ='PRODUCT REVIEW' />
     < ProductReview review={productReviews} />

     < Heading heading ='VIDEOS'  />

     <Video player={videos} />
     < Heading heading ='IN THE PRESS'  />
    <SliderEnd  ends={banner.end}/>
    <PreFooter/>
    < PreFooterSecond/>
    <Footer/>

    
    </Router >
  );
}

export default App;
