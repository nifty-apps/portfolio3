import React, { Fragment, useState, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

const portfolio = [
  {
    img: imgAPI.unisex[6],
    title: 'Aenean facilisis vitae purus',
    link: 'https://mpairtech.netlify.app/',
    size: '',
    category: 'cat1'
  },
  {
    img: imgAPI.unisex[6],
    title: 'Aenean facilisis vitae purus',
    link: 'https://boutiquin.netlify.app/',
    size: '',
    category: 'cat1'
  },
  {
    img: imgAPI.unisex[6],
    title: 'Aenean facilisis vitae purus',
    link: 'https://rick-and-morty-byopu.netlify.app/',
    size: '',
    category: 'cat1'
  },
  {
    img: imgAPI.unisex[6],
    title: 'Aenean facilisis vitae purus',
    link: 'https://aktheruzzaman.netlify.app/',
    size: '',
    category: 'cat2'
  },
  {
    img: imgAPI.unisex[7],
    title: 'Aenean facilisis vitae purus',
    link: 'https://aktheruzzaman.netlify.app/',
    size: '',
    category: 'cat2'
  },
  {
    img: imgAPI.unisex[8],
    title: 'Aenean facilisis vitae purus',
    link: 'https://aktheruzzaman.netlify.app/',
    size: '',
    category: 'cat2'
  },
  {
    img: imgAPI.unisex[9],
    title: 'Aenean facilisis vitae purus',
    link: 'https://aktheruzzaman.netlify.app/',
    size: '',
    category: 'cat2'
  },
  {
    img: imgAPI.unisex[9],
    title: 'Aenean facilisis vitae purus',
    link: 'https://chimerical-duckanoo-3318f5.netlify.app/',
    size: '',
    category: 'cat3'
  },
  {
    img: imgAPI.unisex[9],
    title: 'Aenean facilisis vitae purus',
    link: 'https://exquisite-florentine-1551bd.netlify.app/',
    size: '',
    category: 'cat3'
  },
  {
    img: imgAPI.unisex[9],
    title: 'Aenean facilisis vitae purus',
    link: 'https://superlative-praline-2301ba.netlify.app/',
    size: '',
    category: 'cat3'
  },
  {
    img: imgAPI.unisex[9],
    title: 'Aenean facilisis vitae purus',
    link: 'https://cute-pithivier-1d029a.netlify.app/',
    size: '',
    category: 'cat3'
  },
];

function Gallery() {
  const { classes } = useStyle();
  const { t } = useTranslation('common');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  const filterChildren = name => {
    setData([]);
    setTimeout(() => {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name);
        setData(filteredData);
        setFilter(name);
      } else {
        setData(portfolio);
        setFilter('all');
      }
    }, 1);
  };

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + data.length - 1) % data.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + data.length + 1) % data.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  return (
    <div className={classes.root}>
      {open && (
        <Lightbox
          mainSrc={data[photoIndex].img}
          nextSrc={data[(photoIndex + 1) % data.length].bg || data[(photoIndex + 1) % data.length].logo}
          prevSrc={data[(photoIndex + 1) % data.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container>
        <Title>
          {t('unisex-landing.gallery_title')}
          <strong>
            {t('unisex-landing.gallery_titleBold')}
          </strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('cat1')}
            className={filter === 'cat1' ? classes.selected : ''}
          >
            Front-End
          </Button>
          <Button
            onClick={() => filterChildren('cat2')}
            className={filter === 'cat2' ? classes.selected : ''}
          >
            Full-Stack
          </Button>
        </div>
        {!isMobile ? (
          <Fragment>
            <div className={classes.massonry}>
              {data.map((item, index) => (
                <div
                  className={classes.item}
                  key={index.toString()}
                  id={index.toString()}
                >
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-50}
                    delay={200 + (100 * index)}
                    duration={0.3}
                  >
                    <ImageThumbCard
                      img={item.img}
                      title={item.title}
                      link={item.link}
                      size={item.size}
                      openPopup={() => showPopup(index)}
                    />
                  </ScrollAnimation>
                </div>
              ))}
            </div>
            {data.length < 1 && <Typography variant="button" component="p" align="center">{t('unisex-landing.gallery_nodata')}</Typography>}
          </Fragment>
        ) : (
          <Carousel {...settings}>
            {data.map((item, index) => (
              <div
                className={classes.itemCarousel}
                key={index.toString()}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size={item.size}
                  openPopup={() => showPopup(index)}
                />
              </div>
            ))}
          </Carousel>
        )}
      </Container>
    </div>
  );
}

export default Gallery;
