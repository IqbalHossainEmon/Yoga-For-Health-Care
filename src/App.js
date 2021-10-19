import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import CommingSoon from "./Pages/CommingSoon/CommingSoon";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import WhoWeAre from "./Pages/WhoWeAre/WhoWeAre/WhoWeAre";
import Contact from "./Pages/Contact/Contact";
import Details from "./Pages/Home/Details/Details";
import AuthProvider from "./Pages/Context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/commingSoon">
            <CommingSoon />
          </Route>
          <PrivateRoute path="/whoWeAre">
            <WhoWeAre />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/details/:id">
            <Details />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );
}

export default App;
