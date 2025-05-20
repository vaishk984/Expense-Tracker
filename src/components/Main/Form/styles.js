import React, { useContext } from 'react';
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@mui/material'; // MUI v5 import style
import { Delete, MoneyOff } from '@mui/icons-material'; // MUI v5 icons

import { ExpenseTrackerContext } from '../../../context/context';
import { red, green } from '@mui/material/colors';

const List = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  return (
    <MUIList
      dense={false}
      sx={{
        maxHeight: 150,
        overflow: 'auto',
      }}
    >
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: '#fff',
                  backgroundColor: transaction.type === 'Income' ? green[500] : red[500],
                }}
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
