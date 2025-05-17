import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('feedback');
    if (saved) {
      return JSON.parse(saved); 
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setCount((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  const handleReset = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(count));
  }, [count]);
  

  return (
    <>
      <Description />
      <Options
        options={count}
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback options={count} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
