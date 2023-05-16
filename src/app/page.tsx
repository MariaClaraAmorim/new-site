import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.details}>
            <button className={styles.button1}></button>
            <button className={styles.button2}></button>
            <button className={styles.button3}></button>
          </div>
        </div>
      </div>
    </main>
  );
}
