import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/ContentContainer";
import { Authorization } from "./components/pages/Authorization";
import { Route } from "react-router-dom";
import { Community } from "./components/pages/Community";
import { useEffect } from "react";
import { connect } from "react-redux";
import { signinSuccess } from "./redux/reducers/authReducer";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setUserData(userData) {
      dispatch(signinSuccess(userData))
    }
  }
};

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      props.setUserData(JSON.parse(localStorage.getItem("user")))
    }
  }, []);
  return (
    <div className="App">
      <Route exact path="/" component={Navbar} />
      <Route exact path="/" component={Content} />
      <Route exact path="/auth" component={Authorization} />
      <Route exact path="/cyberpunk" component={Community} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

