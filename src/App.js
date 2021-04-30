import './App.css';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import CardMovie from './components/cardMovie/CardMovie';
import Signup from './containers/signup/Signup';
import { Carousel } from './components/carousel/Carousel';
import DisplayMovies from './containers/displayMovies/DisplayMovies';
import PopupSignup from './components/popupSignup/PopupSignup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieDetail } from './components/movieDetail/MovieDetail';

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

          <Route path="/movie/:id" component={MovieDetail}></Route>
          <Route path="/movies" component={DisplayMovies}></Route>

          {/* <Login /> */}
          {/* <CardMovie></CardMovie> */}

          {/* <Signup></Signup> */}
          {/* <Login></Login> */}
        </Switch>
      </div>

      <Footer />
    </BrowserRouter >
  );
}

export default App;
