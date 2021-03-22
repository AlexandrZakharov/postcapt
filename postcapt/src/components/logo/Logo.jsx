import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div
      className={styles.logo}
      style={{
        fontSize: props.fontSize + "px",
        lineHeight: props.lineHeight + "px",
        width: props.width + 'px'
      }}
    >
      <h1 className={styles.logo__post}>POST</h1>
      <h1 className={styles.logo__capt}>CAPT</h1>
    </div>
  );
};

export default Logo;
