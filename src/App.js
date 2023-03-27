import React, {useState, useRef} from 'react';
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";

import './App.css';
import Header from './components/header/Header';
import Editor from './components/editor/Editor';
import Preview from "./components/preview/Preview";

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

  const resumeRef = useRef();


const [activeColor, setActiveColor] = useState(colors[0]);

const [resumeInformation, setResumeInformation] = useState({
  [sections.basicInfo]: {
    id: sections.basicInfo,
    sectionTitle: sections.basicInfo,
    detail: {},
  },
  [sections.workExp]: {
    id: sections.workExp,
    sectionTitle: sections.workExp,
    details: [],
  },
  [sections.project]: {
    id: sections.project,
    sectionTitle: sections.project,
    details: [],
  },
  [sections.education]: {
    id: sections.education,
    sectionTitle: sections.education,
    details: [],
  },
  [sections.achievement]: {
    id: sections.achievement,
    sectionTitle: sections.achievement,
    points: [],
  },
  [sections.skill]: {
    id: sections.skill,
    sectionTitle: sections.skill,
    points: [],
  },
  [sections.other]: {
    id: sections.other,
    sectionTitle: sections.other,
    detail: "",
  },
});

// useEffect(()=>{
//   console.log(resumeInformation)
// },[resumeInformation])

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <div className="toolbar">
          <div className="colors">
            {colors.map((item) => (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className={`color ${activeColor === item ? ".active" : ""}`}
                onClick={() => setActiveColor(item)}
              />
            ))}
          </div>
          <ReactToPrint
            trigger={() => {
              return (
                <button>
                  Download <ArrowDown />
                </button>
              );
            }}
            content={() => resumeRef.current}
          />
        </div>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Preview
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default App;
