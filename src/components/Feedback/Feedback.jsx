import styles from './Feedback.module.css';

export default function Feedback({ options, totalFeedback, positiveFeedback}) {
  return (
    <div className={styles.feedbackContainer}>
      <ul className={styles.list}>
        {Object.entries(options).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)} : {value}
          </li>
        ))}
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
