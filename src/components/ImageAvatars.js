import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatar3 from '../images/avatar3.jpg'; 
import avatar from '../images/avatar.jpg'; 
import avatar2 from '../images/avatar2.jpg'; 


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  medium: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  large: {
    width: theme.spacing(27),
    height: theme.spacing(27),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={avatar3} className={classes.small} />
      <Avatar alt="Remy Sharp" src={avatar2} className={classes.medium}/>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
    </div>
  );
}