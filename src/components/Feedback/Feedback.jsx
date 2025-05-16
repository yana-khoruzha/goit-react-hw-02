import styles from './Feedback.module.css';

export default function Feedback({ options, totalFeedback }) {
  return (
    <div className={styles.feedbackContainer}>
      <ul className={styles.list}>
        {Object.entries(options).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)} : {value}
          </li>
        ))}
        <li>Total: {totalFeedback}</li>
        <li>Positive: {Math.round((options.good / totalFeedback) * 100)}%</li>
      </ul>
    </div>
  );
}
