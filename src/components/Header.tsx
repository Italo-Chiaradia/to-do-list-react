import styles from "./Header.module.css";
import Rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Rocket}/>
        <div>
          <span className={styles.blueColor}>to</span>
          <span className={styles.purpleColor}>do</span>
        </div>
      </div>
    </header>
  )
}