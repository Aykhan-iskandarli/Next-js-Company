import React from 'react';

const Skills = ({per,title, width}) => {
  return (
      <div className="skills">
             <div className="skills">
              <div className="skill-bar">
                <span>{title}</span>
                <span className='skill-per'>{per}</span>
              </div>
              <div className="skill-out">
                <div className="skill-in" style={{width:width+"%"}}></div>
              </div>
            </div>
      </div>
  )
};

export default Skills;
