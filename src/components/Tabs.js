import React, { useState } from "react";
import './Tabs.css'

const Tabs = () => {
const [toggleState, setToggleState]=useState(1);

const toggleTab = (index) => {
    setToggleState(index)
}

    return(
        <div>
            <div className="container-tabs">
                <div className="bloc-tabs">
                    <button className={toggleState ===1? 'tabs active-tabs': 'tabs'} 
                    onClick={()=> toggleTab(1)}>Education
                    </button>
                    <button className={toggleState ===2? 'tabs active-tabs': 'tabs'} 
                    onClick={()=> toggleTab(2)}>Experience
                    </button>
                    <button className={toggleState ===3? 'tabs active-tabs': 'tabs'} 
                    onClick={()=> toggleTab(3)}>Skills
                    </button>
                </div>
            </div>
            <div className="content-tabs">
                {toggleState === 1 && (
                    <div className="content active-content">
                        <h1>Education</h1>
                      <hr/>
                      <ul>
                        <li>Piraeus University of Applied Sciences -
                            BSc in Civil Engineering </li>
                      </ul>
                      <ul>
                        <li>Hellenic Open University -
                        MSc in Computer and Information Sciences</li>
                      </ul>
                    </div>
                )}
                {toggleState === 2 && (
                  <div className="content active-content">
                    <h1>Experience</h1>
                    <hr />
                    <ul>
                      <li>Piraeus Direct Solutions: Merchant Service/ Support (10/2017 - 2/2021)</li>
                    </ul>
                    <ul>
                      <li>Viva Wallet: E-Commerce & Technical Support Specialist (3/2021 - 10/2021)</li>
                    </ul>
                    <ul>
                      <li>Euronet Worldwide: AS400 Programmer/ Data Analyst (10/2021 - 8/2022)</li>
                    </ul>
                    <ul>
                      <li>Qualco: Software Support Engineer (8/2022 - Present)</li>
                    </ul>
                  </div>
                )}
                {toggleState === 3 && (
                  <div className="content active-content">
                    <h1>Skills</h1>
                    <hr />
                    <ul>
                      <li>SQL</li>
                    </ul>
                    <ul>
                      <li>C# .Net Framework</li>
                    </ul>
                    <ul>
                      <li>Python/ Tensorflow/ Anaconda (Machine Learning)</li>
                    </ul>
                    <ul>
                      <li>HTML</li>
                    </ul>
                    <ul>
                      <li>CSS</li>
                    </ul>
                    <ul>
                      <li>JavaScript</li>
                    </ul>
                    <ul>
                      <li>TypeScript</li>
                    </ul>
                    <ul>
                      <li>React</li>
                    </ul>
                    <ul>
                      <li>Angular</li>
                    </ul>
                  </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;