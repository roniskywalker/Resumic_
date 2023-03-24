import React from 'react';
import { ArrowDown } from "react-feather";
import './App.css';
import Header from './components/header/Header';

function App() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  return (
    <div className="App">
      <Header />
      <div className="toolbar">
        <div className="colors">
          {colors.map((item) => (
            <span 
            key={item} 
            style={{ backgroundColor: item }} 
            className ="color"
            />
          ))}
        </div>
        <button>
          Download <ArrowDown />
        </button>
      </div>
      <div className='he'></div>
    </div>
  );
}

export default App;
