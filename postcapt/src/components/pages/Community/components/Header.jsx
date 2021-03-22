import styles from "../Community.module.css";
import Logo from "../../../logo/Logo";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ProfileAvatar from "./avatar/ProfileAvatar";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link className={styles.header__logo} to="/">
          <Logo fontSize={16} lineHeight={26} width={90} />
        </Link>
        <Link to="/id1" className={styles.profile}>
          <div className={styles.profile__name}>
            <span className={styles.name__text}>Alexandr Zakharov</span>
            <span className={styles.profile__text}>Profile</span>
          </div>
          <ProfileAvatar
            img={
              "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg"
            }
            size={50}
          />
          <ArrowBackIosIcon className={styles.profileSetting__icon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
