import React from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';

function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            {!isTablet && (
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.unisex.name}
              </Typography>
            )}
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('unisex-landing.timeline_experience')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>React JS Developer (Intern)</Typography>
                        <Typography gutterBottom>Nifty IT Sollutions</Typography>
                        <Typography className={classes.time}>September 2023 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={100}
                      delay={300}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>WEB Instructor</Typography>
                        <Typography gutterBottom>Institute of Freelancing</Typography>
                        <Typography className={classes.time}>June 2023 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={200}
                      delay={400}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>
                          Teaching Assistant
                          <br />
                          (Computer Security)
                        </Typography>
                        <Typography gutterBottom>International Islamic University, Chittagong</Typography>
                        <Typography className={classes.time}>Autumn-2023</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>
                          Teaching Assistant
                          <br />
                          (Web Tools & Technology)
                        </Typography>
                        <Typography gutterBottom>International Islamic University, Chittagong</Typography>
                        <Typography className={classes.time}>Spring-2022</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('Education')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>BSc in CSE</Typography>
                        <Typography gutterBottom>International Islamic University, Chittagong</Typography>
                        <Typography className={classes.time}>2018-2022</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>HSC Science</Typography>
                        <Typography gutterBottom>Chittagong Government College</Typography>
                        <Typography className={classes.time}>2015-2017</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
                <Typography variant="h5" className={cx(classes.title2, text.subtitle)}>
                  {t('Contact')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography gutterBottom>Whatsapp</Typography>
                        <Typography className={classes.time}>+880 152 1227 899</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography gutterBottom>Email</Typography>
                        <Typography className={classes.time}>opuctg440@gmail.com</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography gutterBottom>Address</Typography>
                        <Typography className={classes.time}>Chittagong, Bangladesh</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Timeline;
