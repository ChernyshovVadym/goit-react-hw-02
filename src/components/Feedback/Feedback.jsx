const Feedback = ({
  feedbacks: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  //   console.log(good, neutral, bad, "component feedback");

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
