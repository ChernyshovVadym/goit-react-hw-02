import { useState } from "react";
import Description from "./components/Description/Description";
import { useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedbacks, setFeedbacks] = useState(
    () => JSON.parse(localStorage.getItem("feedback")) ?? initState
  );
  // console.log(feedbacks.good, feedbacks.neutral, feedbacks.bad);
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);
  const updateFeedback = (feedbackType) => {
    console.log("feedbackType", feedbackType);
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setFeedbacks(initState);
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  console.log("feedbacks", feedbacks);
  const positiveFeedback =
    Math.round((feedbacks.good / totalFeedback) * 100) || 0;
  // console.log(positiveFeedback);
  return (
    <>
      <Description />
      <Options
        resetFeedback={resetFeedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
