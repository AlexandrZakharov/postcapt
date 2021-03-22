import styles from './Content.module.css';
import Home from '../home/Home';
import Trend from '../posts/TrendPosts';

const Content = (props) => {
  return (
    <div className={styles.content}>
      <div 
        className={styles.content__wrapper} 
        style={{ gridTemplateColumns: `100vw ${props.trendWidth}px` }}>
        <Home />
        <Trend trend={props.trend} />
      </div>
    </div>
  )
}

export default Content;