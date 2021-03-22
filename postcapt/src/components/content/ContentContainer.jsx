import { connect } from 'react-redux';
import Content from './Content';
import { getTrendWidthAC } from '../../redux/reducers/trendReducer';

const mapStateToProps = state => {
  return {
    trend: state.trendReducer.trendPostsList,
    trendWidth: (state.trendReducer.postWidth + state.trendReducer.postMarginRight) * state.trendReducer.trendPostsList.length
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Content)