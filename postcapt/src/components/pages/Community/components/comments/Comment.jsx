import styles from "./CommentsSection.module.css";
import ProfileAvatar from "../avatar/ProfileAvatar";

const Comment = (props) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__avatar}>
        <ProfileAvatar
          img={props.payload.avatarUrl}
          size={34}
        />
      </div>
      <div className={styles.comment__main}>
        <span className={styles.profile__name}>{props.payload.name}</span>
        <span className={styles.comment__text}>{props.payload.text}</span>
        <span className={styles.comment__date}>{props.payload.date}</span>
      </div>
    </div>
  );
};

export default Comment;
