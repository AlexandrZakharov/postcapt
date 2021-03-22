import styles from "./ProfileAvatar.module.css";

const ProfileAvatar = (props) => {
  return (
    <div
      className={styles.profile__avatar}
      style={{ width: props.size + "px", height: props.size + "px" }}
    >
      <img src={props.img} alt="avatar" />
    </div>
  );
};

export default ProfileAvatar;
