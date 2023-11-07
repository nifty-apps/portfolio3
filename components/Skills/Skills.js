import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './skills-style';

function Skills() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <div className={classes.progress}>
          <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
            {t('unisex-landing.timeline_skill')}
          </Typography>
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            delay={400}
            duration={0.3}
            afterAnimatedIn={handlePlay}
          >
            <Grid item container spacing={3} md={12} lg={12}>
              <Grid item sm={6} xs={12}>
                <ul>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-color-wand" />
                      <Typography variant="h6" className={text.subtitle2}>HTML</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 80 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-logo-dribbble" />
                      <Typography variant="h6" className={text.subtitle2}>CSS</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 70 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-globe" />
                      <Typography variant="h6" className={text.subtitle2}>Javascript</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 60 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-camera" />
                      <Typography variant="h6" className={text.subtitle2}>Typescript</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 90 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-snow" />
                      <Typography variant="h6" className={text.subtitle2}>GraphQL</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 80 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                </ul>
              </Grid>
              <Grid item sm={6} xs={12}>
                <ul>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-color-wand" />
                      <Typography variant="h6" className={text.subtitle2}>React JS</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 80 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-logo-dribbble" />
                      <Typography variant="h6" className={text.subtitle2}>Node JS</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 70 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-globe" />
                      <Typography variant="h6" className={text.subtitle2}>Express JS</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 60 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-camera" />
                      <Typography variant="h6" className={text.subtitle2}>Next JS</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 90 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                  <li>
                    <div className={classes.textIcon}>
                      <i className="ion-ios-snow" />
                      <Typography variant="h6" className={text.subtitle2}>MonoDB</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={play ? 80 : 0}
                      classes={{
                        root: classes.progressBg,
                        bar: classes.bar
                      }}
                    />
                  </li>
                </ul>
              </Grid>
            </Grid>
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
