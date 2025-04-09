import React from 'react';
import ProgressBar from '../components/ProgressBar';
import LessonList from '../components/LessonList';
import MaterialSections from '../components/MaterialSections';

const UserDashboard = () => {
  return (
    <div className="p-6">
      <ProgressBar percentage={60} />
      <LessonList />
      <MaterialSections />
    </div>
  );
};

export default UserDashboard;