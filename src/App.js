import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import { NotFound } from 'http-errors';
import Services from './Pages/Service/Services';
import About from './Pages/About/About';
import Doctors from './Pages/Doctor/Doctors';
import Appoinment from './Pages/Appoinment/Appoinment';
import SingelService from './Pages/Service/SingelService';
import AuthProvider from './Contex/AuthProvider';
import Login from './Pages/Login/Login/Login';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/Service">
              <Services></Services>
            </Route>
            <Route path="/Doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/SingelService/:ServiceId">
              <SingelService></SingelService>
            </Route>
            <Route path="/Appointment">
              <Appoinment></Appoinment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            </Switch>
            <Footer></Footer>
            </Router>
            </AuthProvider>
      
    </div>
  );
}

export default App;
