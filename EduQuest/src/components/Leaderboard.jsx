import React from 'react';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const leaderboardData = [
    { name: 'Alice', points: 200 },
    { name: 'Bob', points: 180 },
    { name: 'Student (You)', points: 150 },
    { name: 'Eve', points: 120 },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((player, index) => (
          <motion.li key={index} initial={{ x: -100 }} animate={{ x: 0 }}>
            <span>{index + 1}. {player.name}</span>
            <span>{player.points} pts</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
