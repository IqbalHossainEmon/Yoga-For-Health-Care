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

function App() {
  return (
    <div>
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
          <Route path="/whoWeAre">
            <WhoWeAre />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
