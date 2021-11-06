import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "../components/404/index";
// USER ROUTES
import SplashScreen from "../components/user/pages/spashScreen/index";
import Home from "../components/user/pages/home/index";
import Profile from "../components/user/pages/profile/index";
import Login from "../components/user/auth/login/index";
import Signup from "../components/user/auth/signup/index";
import VerifyEmail from "../components/user/auth/verifyEmail";
import CareerGrowth from "../components/user/pages/careerGrowth";
import HomeLayout from '../components/user/pages/homeLayout/HomeLayout'

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* CUSTOMER ROUTES */}
          <Route exact path="/" component={SplashScreen} />
          <Route exact path="/start" component={Home} />
          {/* <Route exact path="/buildprofile" component={Profile} /> */}
          <Route exact path="/home" component={HomeLayout} />
          <Route exact path="/career-growth" component={CareerGrowth} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/verify" component={VerifyEmail} />
          {/* 404 PAGE ROUTE */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};
export default Routes;
