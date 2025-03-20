import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../context/UserContext';

const Quiz = () => {
  const { user, setUser } = useContext(UserContext);
  const questions = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { question: 'Capital of France?', options: ['Paris', 'London', 'Berlin'], answer: 'Paris' },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 10);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
      setUser({
        ...user,
        points: user.points + score,
        badges: [...user.badges, 'Quiz Master'],
      });
    }
  };

  if (showResult) {
    return (
      <motion.div className="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}</p>
        <p>New Badge Earned: Quiz Master!</p>
      </motion.div>
    );
  }

  return (
    <div className="quiz">
      <h2>{questions[current].question}</h2>
      <div className="options">
        {questions[current].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
