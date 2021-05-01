//Styles
import './App.css';

//Routes
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Containers
import { Login } from './containers/login/Login';
import { Signup } from './containers/signup/Signup';
import { DisplayMovies } from './containers/displayMovies/DisplayMovies';

//Components
import { CardUser } from './components/cardUser/CardUser'
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
import { Carousel } from './components/carousel/Carousel';
import { MovieDetail } from './components/movieDetail/movieDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="bg">

        <Header />
        <Switch>

          <Route path="/" component={Carousel} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={CardUser} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/displayMovies" component={DisplayMovies} />
          {/* <Route path="/orders"></Route> */}

        </Switch>
      </div>

      <Footer />
    </BrowserRouter >
  );
}

export default App;
