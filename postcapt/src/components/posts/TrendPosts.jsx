import { useState } from 'react';
import Post from './post/Post';
import styles from './TrendPosts.module.css';

const TrendPosts = (props) => {
  return (
    <div className={styles.posts}>
      <h1 className={styles.posts__title}>#Trend</h1>
      <div className={styles.posts__wrapper}>
        {props.trend.map((post) => <Post key={post.id} info={post} />)}
      </div>
    </div>
  )
}

export default TrendPosts;