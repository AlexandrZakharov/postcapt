import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.img__wrapper}>
        <img className={styles.post__img} src={props.info.img} alt={props.info.title} />
      </div>
      <div className={styles.post__info}>
        <h1 className={styles.post__title}>{props.info.title}</h1>
        <span className={styles.post__description}>{props.info.description}</span>
      </div>

    </div>
  )
}

export default Post;