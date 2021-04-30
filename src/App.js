import './App.css';
import CardUser from './components/cardUser/CardUser'
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
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
          <Route path="/user" component={CardUser}></Route>
          <Route path="/movie/:id" component={MovieDetail}></Route>
          <Route path="/movies" component={DisplayMovies}></Route>
          <Route path="/displayMovies" component={DisplayMovies}></Route>
        </Switch>
      </div>

      <Footer />
    </BrowserRouter >
  );
}

export default App;
