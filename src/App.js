import './App.css';
import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import EducationalBackground from './components/EducationalBackground';
import WorkExperience from './components/WorkExperience';
import Project from './components/Projects';
function App() {
  return (
    <div>
      <PersonalInfo />
      <EducationalBackground />
      <WorkExperience />
      <Project />
    </div>
  );
}

export default App;
