import { signup, signin } from "../../../redux/reducers/authReducer";
import { connect } from "react-redux";
import Authorization from "./Authorization";

const mapStateToProps = state => {
  return {
    authData: state.authReducer
  }
}

const mapDispatchToProps = {
  signup, signin
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
