import React, { useState } from "react";
import './Tabs.css'

const tabsData = [
  { id: 1, title: "Education", content: [
    "Hellenic Open University - MSc in Computer and Information Sciences",
    "Piraeus University of Applied Sciences - BSc in Civil Engineering"
    
  ]},
  { id: 2, title: "Experience", content: [
    "Qualco: Software Engineer | Intelligent Decisions (12/2024 - Present)",
    "Qualco: Software Support Engineer (8/2022 - 11/2024)",
    "Euronet Worldwide: AS400 Programmer/ Data Analyst (10/2021 - 8/2022)",
    "Viva Wallet: E-Commerce & Technical Support Specialist (3/2021 - 10/2021)",
    "Piraeus Direct Solutions: Merchant Service/ Support (10/2017 - 2/2021)"
    
  ]},
  { id: 3, title: "Skills", content: [
    { name: "SQL", level: 90 },
    { name: "C# .Net Framework", level: 85 },
    { name: "Python/ Tensorflow/ Anaconda (Machine Learning)", level: 75 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "React", level: 85 },
    { name: "Angular", level: 70 }
  ]}
];

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="container-tabs">
        <div className="bloc-tabs">
          {tabsData.map(tab => (
            <button
              key={tab.id}
              className={toggleState === tab.id ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="content-tabs">
        {tabsData.map(tab => (
          toggleState === tab.id && (
            <div key={tab.id} className="content active-content">
              <h1>{tab.title}</h1>
              <hr />
              {tab.id === 3 ? ( // Αν είναι η καρτέλα Skills
                <ul className="skills-list">
                  {tab.content.map((skill, index) => (
                    <li key={index} className="skill-item">
                      <span>{skill.name}</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${skill.level}%` }}>
                          <span className="progress-text">{skill.level}%</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {tab.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Tabs;
