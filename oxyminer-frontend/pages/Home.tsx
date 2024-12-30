// Home.tsx
import './css/Home.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from '../types/user';
import { Tap } from '../types/taps';

export default function Home({
  points,
  goals,
  user,
  updateUser,
}: {
  points: number[];
  goals: { level: number; goal: number }[];
  user: User;
  updateUser: (updatedUser: Partial<User>) => void;
}) {
  const [miningPoints, setMiningPoints] = useState(user.points);
  const [taps, setTaps] = useState<Tap[]>([]);

  // Функція для оновлення points на сервері
  const updatePointsOnServer = async (points: number) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/1/points', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ points }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update points: ${response.status}`);
      }

      const data = await response.json();
      console.log('Updated points on server:', data.points);
    } catch (error) {
      console.error('Error updating points on server:', error);
    }
  };

  const handleClickTapper = async (e: React.MouseEvent<HTMLDivElement>) => {
    const currentLevel = goals.find((goal) => goal.level === user.level);
    if (!currentLevel) return;

    const addedPoints = points[user.level - 1];
    const newMiningPoints = miningPoints + addedPoints;
    setMiningPoints(newMiningPoints);

    // Синхронізуємо з сервером
    await updatePointsOnServer(newMiningPoints);

    if (newMiningPoints >= currentLevel.goal) {
      const nextLevel = goals.find((goal) => goal.level === user.level + 1);
      if (nextLevel) {
        updateUser({ level: nextLevel.level, points: newMiningPoints });
      }
    } else {
      updateUser({ points: newMiningPoints });
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTaps((prevTaps) => [
      ...prevTaps,
      { id: Date.now(), value: addedPoints, position: { x, y } },
    ]);
  };

  const removeTap = (id: number) => {
    setTaps((prevTaps) => prevTaps.filter((tap) => tap.id !== id));
  };

  return (
    <div className="mining-container">
      <div className="mining-content-container">
        <div className="mining-level-name">Level {user.level}</div>
        <div className="mining-tapper" onClick={handleClickTapper}>
          <AnimatePresence>
            {taps.map((tap) => (
              <motion.div
                key={tap.id}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -20 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onAnimationComplete={() => removeTap(tap.id)}
                style={{
                  position: 'absolute',
                  left: tap.position.x,
                  top: tap.position.y,
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                +{tap.value}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="mining-info">
        <div>Points: {miningPoints}</div>
        <div>
          Next Goal: {goals[user.level - 1]?.goal || 'Max level reached'}
        </div>
      </div>
    </div>
  );
}
