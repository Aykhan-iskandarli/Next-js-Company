import React from 'react';

const Title = ({title1,title2, className,desc}) => {
  return (
    <div className="title title-white">
      <div className='title-content'>
        <p className={`desc `}>{title1}</p>
        {/* <span className="line1"></span>
        <span className="line2"></span> */}
      </div>
      <h1 className={`head ${className}`}>{title2}</h1>
      <p className='desc2'>{desc}</p>

    </div>
  );
};

export default Title;
