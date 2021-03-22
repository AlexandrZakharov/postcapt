import styles from './Home.module.css';
import Logo from '../logo/Logo';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__wrapper}>
        <Logo />
        <div className={styles.tagline}>
          <h2 className={styles.tagline__text}>
            Just capture the beaty and post it.
          </h2>
        </div>
        <div className={styles.description}>
          <div className={styles.description__title}>
            Post your favorite life moments.
          </div>
          <div className={styles.description__text}>
            Create your own public page where you can share your thoughts and impressions about your interests. Produce
            scientific, educational, entertainment, narrative and other content. Read your favorite pages, comment and
            leave emotions on them.
          </div>
        </div>
        <div className={styles.home__arrows}>
          <div className={styles.arrows__wrapper}>
            <div className={`${styles.arrow__sliding} ${styles.delay1}`}>
              <div className={styles.arrow}></div>
            </div>
            <div className={`${styles.arrow__sliding} ${styles.delay2}`}>
              <div className={styles.arrow}></div>
            </div>
            <div className={`${styles.arrow__sliding} ${styles.delay3}`}>
              <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.arrows__text}>
            Scroll
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;