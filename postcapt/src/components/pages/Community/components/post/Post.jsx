import styles from "./Post.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useState } from "react";
import CommentsSection from "../comments/CommentsSection";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = (props) => {
  const [commentsSection, setCommentsSection] = useState(true);

  const likeButtonHandler = () => {
    if (props.payload.isLiked) {
      props.removeLike(props.payload.id);
    } else {
      props.addLike(props.payload.id);
    }
  };

  return (
    <div className={styles.post}>
      <div className={styles.post__image}>
        <img src={props.payload.imgUrl} alt="Post Image" />
      </div>
      <div className={styles.post__info}>
        <div className={styles.postInfo__wrapper}>
          <div className={styles.postInfo__top}>
            <h1 className={styles.post__title}>{props.payload.title}</h1>
            <div className={styles.post_dateAndSettings}>
              <span className={styles.post__date}>{props.payload.date}</span>
              <div className={styles.post__settings}>
                <ArrowBackIosIcon className={styles.postSettings__icon} />
                {/* settings */}
              </div>
            </div>
          </div>
          <div className={styles.post__views}>
            <VisibilityIcon className={styles.postViews__icon} />
            <span className={styles.postViews__text}>
              {props.payload.views} views
            </span>
          </div>
          <p className={styles.post__text}>{props.payload.text}</p>
          {commentsSection ? (
            <div className={styles.post__comments}>
              <CommentsSection
                postId={props.payload.id}
                payload={props.payload.comments.payload}
                addComment={props.addComment}
                removeComment={props.removeComment}
              />
            </div>
          ) : (
            ""
          )}
          <div className={styles.post__footer}>
            <div
              className={styles.post__commentsCount}
              onClick={() => {
                setCommentsSection(!commentsSection);
              }}
            >
              {commentsSection ? (
                <ChatBubbleIcon
                  className={styles.commentsCount__icon}
                  style={{ color: "#afafaf" }}
                />
              ) : (
                <ChatBubbleOutlineIcon className={styles.commentsCount__icon} />
              )}
              <span className={styles.commentsCount__text}>
                {props.payload.comments.count}
              </span>
            </div>
            <div
              className={styles.post__likesCount}
              onClick={likeButtonHandler}
            >
              <span className={styles.likesCount__text}>
                {props.payload.likesCount}
              </span>
              {props.payload.isLiked ? (
                <FavoriteIcon
                  className={styles.likesCount__icon}
                  style={{ color: "#aa2626" }}
                />
              ) : (
                <FavoriteBorderIcon className={styles.likesCount__icon} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
