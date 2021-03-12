import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  
}));

export default function LetterAvatars() {
    const classes = useStyles();
  
    return (
      <div style={{marginTop: '-40px'}} className={classes.root}>
        <Avatar style={{height: '5rem', width: '5rem'}}>Py</Avatar>
        <Avatar style={{height: '5rem', width: '5rem'}} className={classes.orange}>JS</Avatar>
        <Avatar style={{height: '5rem', width: '5rem'}} className={classes.orange}>Node</Avatar>
        <Avatar style={{height: '5rem', width: '5rem'}} className={classes.orange}>HTML</Avatar>
        <Avatar style={{height: '5rem', width: '5rem'}} className={classes.orange}>CSS</Avatar>
        <Avatar style={{height: '5rem', width: '5rem'}} className={classes.orange}>REACT</Avatar>
        <Avatar style={{height: '5rem', width: '5rem'}} className={classes.purple}>REDUX</Avatar>
        <Avatar style={{height: '5rem', width: '5rem'}} className={classes.purple}>PSQL</Avatar>
        
      </div>
    );
}