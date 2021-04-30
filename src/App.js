import './App.css';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import CardMovie from './components/cardMovie/CardMovie';
import Signup from './containers/signup/Signup';
import { Carousel } from './components/carousel/Carousel';
import DisplayMovies from './containers/displayMovies/DisplayMovies';
import PopupSignup from './components/popupSignup/PopupSignup';
import { MovieDetail } from './components/movieDetail/movieDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <Header />
        <Switch>

          <Route path="/" component={Carousel} exact></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          {/* <Signup /> */}
          {/* <PopupSignup></PopupSignup> */}
          {/* <CardMovie></CardMovie> */}
          {/* <Carousel /> */}
          {/*  <Login /> */}
          {/* <Signup></Signup> */}
          {/* <DisplayMovies></DisplayMovies> */}
          {/* <Login /> */}
          {/* <CardMovie></CardMovie> */}
          {/* <MovieDetail /> */}
          {/* <Signup></Signup> */}
          {/* <Login></Login> */}
        </Switch>
      </div>

      <Footer />
    </BrowserRouter >
  );
}

export default App;
