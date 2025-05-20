import React from 'react';
import { CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { IncomeCard, ExpenseCard } from './styles'; // import styled cards
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);

  const CardComponent = title === 'Income' ? IncomeCard : ExpenseCard;

  return (
    <CardComponent>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </CardComponent>
  );
};

export default DetailsCard;
