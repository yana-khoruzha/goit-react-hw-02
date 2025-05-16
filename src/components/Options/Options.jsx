import styles from './Options.module.css';

export default function Options({ options, onLeaveFeedback, totalFeedback, onReset }) {
  return (
    <div className={styles.optionsContainer}>
       {Object.keys(options).map((key) => (
        <button key={key} onClick={() => onLeaveFeedback(key)}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (<button onClick={onReset}>Reset</button>)}
    </div>
  );
}