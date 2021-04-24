import './App.css';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import CardMovie from './components/cardMovie/CardMovie';
import Signup from './containers/signup/Signup';

function App() {
  return (
    <div className="bg">
      <Header />
      <Signup></Signup>
      {/* <CardMovie></CardMovie> */}
      <Signup></Signup>
      <Login></Login>
      <Footer />
    </div>
  );
}

export default App;
