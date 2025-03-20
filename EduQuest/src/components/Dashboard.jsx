import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  const progressData = [
    { name: 'Math', points: 80 },
    { name: 'Science', points: 60 },
    { name: 'History', points: 40 },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}!</h2>
      <p>Points: {user.points}</p>

      <h3>Your Progress</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={progressData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="points" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
