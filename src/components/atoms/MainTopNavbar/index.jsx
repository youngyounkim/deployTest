import { useState } from "react";
import styles from "./index.module.css";
import chaplogo from "../../../assets/chaplogo.svg";
import alarm from "../../../assets/alarm.svg";
import send from "../../../assets/send.svg";

const MainTopNavbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* 왼쪽 로고 */}
      <img src={chaplogo} alt="Logo" className={styles.logo} />

      {/* 오른쪽 아이콘들 */}
      <div className={styles.icons}>
        <img src={alarm} alt="Icon 1" className={styles.icon} />
        <img src={send} alt="Icon 2" className={styles.icon} />
      </div>
    </nav>
  );
};

export default MainTopNavbar;
