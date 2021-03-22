import styles from "./CommentsSection.module.css";
import ProfileAvatar from "../avatar/ProfileAvatar";
import SendIcon from "@material-ui/icons/Send";
import Comment from "./Comment";
import { useState } from "react";

const CommentsSection = (props) => {
  const [newComment, setNewComment] = useState("");

  const addNewComment = (e) => {
    if (newComment) {
      props.addComment(props.postId, newComment);
      setNewComment("");
    }
  };

  return (
    <div className={styles.comments__section}>
      <div className={styles.comments}>
        {props.payload.map((comment) => {
          return <Comment key={comment.id} payload={comment} />;
        })}
      </div>
      <div className={styles.new__comment}>
        <input
          className={styles.comment__input}
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <div className={styles.newComment_avatar}>
          <ProfileAvatar
            img={
              "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg"
            }
            size={30}
          />
        </div>
        <SendIcon className={styles.send__comment} onClick={addNewComment} />
      </div>
    </div>
  );
};

export default CommentsSection;
