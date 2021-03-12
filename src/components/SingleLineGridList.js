import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import image from '../images/pic1.jpg';
import image2 from '../images/pic2.jpg';
import image3 from '../images/pic3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
**/
 const tileData = [
   {
     img: image,
     title: 'Image',
     author: 'author',
   },
   {
    img: image2,
    title: 'Image',
    author: 'author',
   },
   {
    img: image3,
    title: 'Image',
    author: 'author',
   },
 ];
 
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    // #696969
    <div style={{backgroundColor: 'black'}} className={classes.root}>
      <GridList style={{ marginLeft: '50px', backgroundColor: 'black'}} className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile style={{ backgroundColor: 'black', marginTop: '100px', height: '250px', width: '20%'}} key={tile.img}>
            <img style={{objectFit: 'contain', height: '500px'}} src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
