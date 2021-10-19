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
import PrivateRoute from './Pages/Login/PrivetRoute/PrivateRoute';




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
            <PrivateRoute path="/Service">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/Doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/About">
              <About></About>
            </Route>
            <PrivateRoute path="/SingelService/:ServiceId">
              <SingelService></SingelService>
            </PrivateRoute>
            <PrivateRoute path="/Appointment">
              <Appoinment></Appoinment>
            </PrivateRoute>
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
