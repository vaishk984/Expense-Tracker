import React from 'react';

const InfoCard = () => {
  // Determine randomly if it is income or expense
  const isIncome = Math.round(Math.random()) === 1;

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '0 10%',
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)', // mimic elevation=3 from MUI
        borderRadius: '4px',
        margin: '20px 0',
        userSelect: 'none',
      }}
    >
      Try saying: <br />
      Add {isIncome ? 'Income ' : 'Expense '}
      for {isIncome ? '$100 ' : '$50 '}
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;
