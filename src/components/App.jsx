import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
const options = ['Good', 'Neutral', 'Bad'];
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleStatsChange = evt => {
    const target = evt.target;
    const name = target.innerText.toLowerCase();
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return neutral + bad + good;
  };
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = total => {
    return Math.round((good / total) * 100);
  };
  return (
    <Section
      title="Feedback"
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackOptions options={options} onLeaveFeedback={handleStatsChange} />
      {(good || neutral || bad) === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage(total)}
        />
      )}
    </Section>
  );
}
export default App;
