import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material'; // updated import
import { Doughnut } from 'react-chartjs-2';

// Assuming you want to keep styles separated, but makeStyles from MUI v4 is deprecated.
// Let's assume you have a styles.js with styled components or sx props for now.
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);

  // Instead of useStyles, you can do inline sx or use styled()
  // Here's an example of using sx prop:
  const cardSx = title === 'Income' 
    ? { borderTop: '10px solid green' } 
    : { borderTop: '10px solid red' };

  return (
    <Card sx={cardSx}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
