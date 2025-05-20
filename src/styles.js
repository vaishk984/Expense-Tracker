import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',  // Hide desktop view on small (mobile) devices
    },
  },
  mobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',  // Hide mobile view on medium+ (desktop) devices
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
