import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import SideNavigation from '../SideNavigation';
import SideNavigationIcon from '../SideNavigation/SideNavigationIcon';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import ui from '~/theme/config';
import Settings from '../Settings';
import Animation from './Hero/Animation';
import AnimationSlideshow from './Hero/AnimationSlideshow';
import Slideshow from './Hero/Slideshow';
import VideoHero from './Hero/Video';
import useStyles from './banner-style';

function BannerNav(props) {
  const { classes: text } = useText();
  const { classes } = useStyles();
  const [bannerHero] = useState('slideshow');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const {
    onToggleDark,
    onToggleDir,
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item lg={ui.navigation === 'icon' ? 1 : 2} xs={12}>
          {!isTablet && (
            <Fragment>
              {ui.navigation === 'icon' && <SideNavigationIcon />}
              {ui.navigation === 'text' && <SideNavigation />}
            </Fragment>
          )}
        </Grid>
        <Grid item lg={ui.navigation === 'icon' ? 11 : 10} xs={12}>
          <div className={classes.banner}>
            <div className={classes.cover}>
              <div className={classes.figure}>
                {bannerHero === 'image' && <div className={classes.img} style={{ backgroundImage: `url(${brand.unisex.cover})` }} />}
                {bannerHero === 'video' && <VideoHero />}
                {bannerHero === 'animation' && <Animation />}
                {bannerHero === 'animation-slide' && <AnimationSlideshow />}
                {bannerHero === 'slideshow' && <Slideshow />}
              </div>
            </div>
            {!isTablet && (
              <div className={classes.settingIcon}>
                <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
              </div>
            )}
            <div className={classes.text}>
              <Typography variant="h2" className={text.title}>
                {brand.unisex.name}
              </Typography>
              <Typography variant="h4" className={text.title2}>
                {brand.unisex.title}
              </Typography>
              {!isMobile && (
                <Fragment>
                  <Typography variant="h5" className={text.subtitle2}>
                    {t('unisex-landing.banner_desc')}
                  </Typography>
                  <div className={classes.socmed}>
                    <Button variant="outlined" className={classes.download} component="a">Download CV</Button>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-facebook" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-twitter" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-instagram" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-linkedin" />
                    </IconButton>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

BannerNav.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BannerNav;
