import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        {/* Income Details - mobile only */}
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        {/* Main component */}
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        {/* Income Details - desktop only */}
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        {/* Expense Details - mobile only */}
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Expense" />
        </Grid>
        {/* Expense Details - desktop only */}
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>

    </div>
  );
};

export default App;
