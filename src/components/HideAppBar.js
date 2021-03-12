import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import LetterAvatars from './LetterAvatars';
import './HideAppBarStyle.css'

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar style={{backgroundColor: '#7FFFD4', color: 'black'}}>
            <Typography className="AppBarTitle" variant="h6"><h2 style={{marginTop: '-25px'}}>Thomas Katalenas: Web Dev Portfolio</h2> <LetterAvatars className="LetterAvatars"/></Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box style={{marginTop: '100px'}}className="BoxColor" my={2}>
          {[...new Array(1)]
            .map(
              () => `My name is Thomas Katalenas I am a Web Developer, specifically a
              Full Stack Engineer. I specialize in react, redux front end. I like to use SCSS and material UI for styling.
              And for backend Node and Express. Went to code camp 2019-2020 at Lambda School`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}