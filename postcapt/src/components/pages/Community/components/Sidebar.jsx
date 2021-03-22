import styles from "../Community.module.css";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SearchIcon from "@material-ui/icons/Search";
import ContactsIcon from "@material-ui/icons/Contacts";
import MailIcon from "@material-ui/icons/Mail";
import setComma from '../../../../scripts/setComma';

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.banner}>
        <img
          className={styles.banner__img}
          src="https://i.redd.it/s8ax5wcb47031.jpg"
          alt="banner"
        />
        <div className={styles.banner__links}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img
            className={styles.avatar__img}
            src="https://images.wallpapersden.com/image/download/johnny-silverhand-and-male-v-cyberpunk-2077_bGZsbWWUmZqaraWkpJRmbmdlrWZlbG4.jpg"
            alt="avatar"
          />
          <div className={styles.subscribe__btn}>Subscribe</div>
        </div>
        <div className={styles.info__top}>
          <div className={styles.title}>Cyberpunk 2077</div>
          <div className={styles.subscribers}>{setComma(19267)} subscribers</div>
          <div className={styles.settings}>
            <ArrowBackIosIcon className={styles.settings__icon} />
            <div className={styles.settings__menu}>
              <ul>
                <li>Complain</li>
                <li>Complain</li>
                <li>Complain</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <input
            className={styles.search__input}
            type="text"
            placeholder="Search for posts..."
          />
          <SearchIcon className={styles.search__icon} />
        </div>
        <div className={styles.description}>
          Cyberpunk 2077 is an open-world, action-adventure story set in Night
          City, a megalopolis obsessed with power, glamour and body
          modification. You play as V, a mercenary outlaw going after a
          one-of-a-kind implant that is the key to immortality. You can
          customize your character’s cyberware, skillset and playstyle, and
          explore a vast city where the choices you make shape the story and the
          world around you.
        </div>
        <div className={styles.video__wrappper}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/8X2kIfS6fb8?controls=1"
            frameBorder="0"
            allow="showinfo; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Link to="/cyberpunk/videos" className={styles.moreVideos}>
            More videos..
          </Link>
        </div>
        <div className={styles.contacts__wrapper}>
          <div className={styles.contacts}>
            <ContactsIcon />
            <span>Contacts</span>
          </div>
          <div className={styles.mail}>
            <span>Write to us</span>
            <MailIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
