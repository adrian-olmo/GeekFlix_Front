import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';

function App() {
  return (
    <div className="bg">

      <Header />



      {/* <Signup></Signup> */}
      <Login></Login>
      <Footer />
    </div>
  );
}

export default App;
