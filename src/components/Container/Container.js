import classNames from "classnames/bind";
import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

function Container({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default Container;
