import Posts from './TrendPosts';
import { connect } from 'react-redux';
import { getPostsAC } from '../../redux/reducers/trendReducer';

const mapStateToProps = (state) => {
  return {
    trend: state.trendReducer
  }
}

const mapDispatchToProps = {}  // AC

export default connect(mapStateToProps, mapDispatchToProps)(Posts);