import React from 'react';
import { Head } from 'next/document';
import theme from '../theme/palette';
import brand from '../public/text/brand';
import favicon from '../public/images/AK_logo.png';

const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    {/* Use minimum-scale=1 to enable GPU rasterization */}
    <meta
      name="description"
      content={brand.unisex.desc}
    />
    {/* Favicon */}
    <link rel="icon" href={favicon} />
    <link rel="manifest" href="/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
    {/* PWA primary color */}
    <meta name="theme-color" content={theme.violet.palette.primary.main} />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css" rel="stylesheet" />
    {/*  Facebook */}
    <meta property="author" content="iluxi" />
    <meta property="og:site_name" content="iluxi.ux-maestro.com" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    {/*  Twitter */}
    <meta property="twitter:site" content="iluxi.ux-maestro.com" />
    <meta property="twitter:domain" content="iluxi.ux-maestro.com" />
    <meta property="twitter:creator" content="iluxi" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:image:src" content="/images/unisex-logo.png" />
    <meta property="og:url" content={brand.unisex.url} />
    <meta property="og:title" content={brand.unisex.desc} />
    <meta
      property="og:description"
      content={brand.unisex.desc}
    />
    <meta name="twitter:site" content={brand.unisex.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={brand.unisex.img} />
    <meta property="og:image" content={brand.unisex.img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <script src="/scripts/vanta/three.r119.min.js" />
  </Head>
);

export default HeadComponent;
