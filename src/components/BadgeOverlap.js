import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(8),
    },
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 100,
    height: 100,
  },
  shapeCircle: {
    borderRadius: '50%',
  },
}));

export default function BadgeOverlap() {
  const classes = useStyles();

  const rectangle = <div className={classes.shape}>Facebook</div>;
  const rectangle1 = <div style={{color: 'black', paddingTop: '30px', backgroundColor: 'yellow'}} className={classes.shape}>Twitter</div>;
  const circle = <div  style={{color: 'white', paddingTop: '30px', backgroundColor: '#3CB371'}} className={clsx(classes.shape, classes.shapeCircle)}>ethereum</div>;
  const circle1 = <div  style={{color: 'white', paddingTop: '30px', backgroundColor: 'brown'}} className={clsx(classes.shape, classes.shapeCircle)}>paypal</div>;

  return (
    <div className={classes.root}>
      <Badge color="secondary" badgeContent="">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent="" variant="dot">
        {rectangle1}
      </Badge>
      <Badge color="secondary" overlap="circle" badgeContent=" ">
        {circle1}
      </Badge>
      <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
        {circle}
      </Badge>
    </div>
  );
}