import Community from "./Community";
import { connect } from "react-redux";
import { addComment, addLike, removeLike } from "../../../redux/reducers/posts";

const mapStateToProps = (state) => {
  console.log(state.posts)
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (postId, text) => {
      dispatch(addComment(postId, text));
    },
    addLike: (postId) => {
      dispatch(addLike(postId));
    },
    removeLike: (postId) => {
      dispatch(removeLike(postId));
    },
  };
}; // AC

export default connect(mapStateToProps, mapDispatchToProps)(Community);
