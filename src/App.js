import React from 'react';
import { ArrowDown } from "react-feather";
import './App.css';
import Header from './components/header/Header';
import Editor from './components/editor/Editor'

function App() {
  const colors = ["blue", "red", "black"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    skill: "Skills",
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
      <Editor sections ={sections} />      
    </div>
  );
}

export default App;
