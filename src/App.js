import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import Order from './components/Order';
import Profile from './components/Profile';
import './App.css';
import TeacherDashboard from './components/TeacherDashboard';
import WishList from './components/WishList';
import StartHeader from './Header';
import StartHome from './start/Home';
import StartFooter from './start/Footer';
import Category from './components/Category';
import SideBar from './components/SideBar';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './components/Filter';
import Community from './components/Community';
import TeacherDashboardSideBar from './components/TeacherDashboard/TeacherDashboardSideBar';
import TeacherCourse from './components/TeacherCourse';
import FooterMain from './components/FooterMain';

toast.configure();
function App() {
  const [{}, dispatch] = useStateValue();

  // !notify me
  const notifyMe = () => {
    toast.success('BOTTOM_RIGHT', {
      position: 'top-left',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    //   will only run once when all app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log('this is from app', authUser);
      if (authUser) {
        // if user just login or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/category">
              <Header />
              <SideBar />
              <Category />
            </Route>
            <Route path="/filter">
              <Header />
              <SideBar />
              <Filter />
            </Route>
            <Route path="/community">
              <Header />
              <SideBar />
              <Community />
            </Route>
            <Route path="/wishlist">
              <Header />
              <SideBar />
              <WishList />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/checkout">
              <Header />
              <SideBar />
              <Checkout />
            </Route>
            <Route path="/profile">
              <Header />
              <SideBar />
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Header />
              <SideBar />
              <StartHome />
            </Route>
            <Route exact path="/course">
              <Header />
              <Home />
            </Route>
            <Route exact path="/payment">
              <Header />
              <SideBar />
              <Payment />
            </Route>
            <Route exact path="/teacherdashboard">
              <Header />
              <SideBar />
              <div className="app__container">
                <div className="app__TeacherDashboardSideBar">
                  <TeacherDashboardSideBar />
                </div>
                <div className="app__TeacherDashboard">
                  <TeacherDashboard />
                </div>
              </div>
            </Route>
            <Route exact path="/teacherCourse">
              <Header />
              <SideBar />
              <div className="app__container">
                <div className="app__TeacherDashboardSideBar">
                  <TeacherDashboardSideBar />
                </div>
                <div className="app__TeacherDashboard">
                  <TeacherCourse />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
      <FooterMain />
     
    </div>
  );
}

export default App;
