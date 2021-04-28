import './App.css';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import CardMovie from './components/cardMovie/CardMovie';
import Signup from './containers/signup/Signup';
import { Carousel } from './components/carousel/Carousel';
import DisplayMovies from './containers/displayMovies/DisplayMovies';
import PopupSignup from './components/popupSignup/PopupSignup';
import { MovieDetail } from './components/movieDetail/MovieDetail';

function App() {
  return (
    <>
      <div className="bg">
        <Header />
        {/* <Signup /> */}
        {/* <PopupSignup></PopupSignup> */}
        {/* <CardMovie></CardMovie> */}
        {/* <Carousel /> */}
        {/*  <Login /> */}
        {/* <Signup></Signup> */}
        <DisplayMovies></DisplayMovies>
        {/* <Login /> */}
        {/* <CardMovie></CardMovie> */}
        {/* <MovieDetail /> */}
        {/* <Signup></Signup> */}
        {/* <Login></Login> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
