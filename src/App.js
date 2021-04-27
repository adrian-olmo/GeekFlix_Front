import './App.css';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import CardMovie from './components/cardMovie/CardMovie';
import Signup from './containers/signup/Signup';
import { Carousel } from './components/carousel/Carousel';
import DisplayMovies from './containers/displayMovies/DisplayMovies';
import PopupSignup from './components/popupSignup/PopupSignup';
import CardOrder from './components/cardOrder/CardOrder';
import CardUser from './components/cardUser/CardUser';

function App() {
  return (
    <div className="bg">
      <Header />
      <CardOrder></CardOrder>
      <CardUser></CardUser>
      {/* <Signup /> */}
      {/* <PopupSignup></PopupSignup> */}
      {/* <CardMovie></CardMovie> */}
      {/* <Carousel /> */}
      {/* <Login /> */}
      {/* <Signup></Signup> */}
      {/* <DisplayMovies></DisplayMovies> */}
      {/* <Login></Login> */}
      {/* <CardMovie></CardMovie> */}
      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
      <Footer />
    </div>
  );
}

export default App;
