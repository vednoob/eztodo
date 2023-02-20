import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <h1>Todo List App</h1>
      <p>ReactJS</p>
    </header>
  );
}

export default Header;
