import { useState } from "react";
import styles from "./Community.module.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Post from "./components/post/Post";

const Community = (props) => {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <div className={styles.community}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <div className={styles.posts}>
            {props.posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  payload={post}
                  addLike={props.addLike}
                  removeLike={props.removeLike}
                  addComment={props.addComment}
                />
              );
            })}
            <div className={styles.load__posts}>
              <span>Load more posts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
