import './App.css';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import CardMovie from './components/cardMovie/CardMovie';
import Signup from './containers/signup/Signup';
import { Carousel } from './components/carousel/Carousel';

function App() {
  return (
    <div className="bg">
      <Header />
      {/* <Signup /> */}
      {/* <CardMovie></CardMovie> */}
      <Carousel />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
