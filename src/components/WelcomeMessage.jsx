import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = (todoItems) => {
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>ENJOY YOUR PRECIOUS DAY HERE</p>
    )
  );
};

export default WelcomeMessage;
