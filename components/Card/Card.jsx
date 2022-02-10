import React from 'react';

const Card = ({Header, Body,Number, Footer, className, date, header_in}) => {
  return (
    <section className="card">
      <div className={`card-H ${className}`}>
       <div className='card-out-div-img'>
          <img src={Header} alt="" />
         <div className="card-in-img">
            <img className='' src={header_in} alt="" />
         </div>
       </div>
        <span>{Number}</span>
      </div>
      <div className="date-new">
      <p className="date">{date}</p>

      </div>
      <div className='card-content'>
        <div className={`card-B title `}>{Body}</div>
        <div className={`card-F desc `}>{Footer}</div>
      </div>
    </section>
  );
};

export default Card;
