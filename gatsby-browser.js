/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/global.css';
import './src/styles/gallery.scss';
import './src/styles/media.scss';

const addScript = (url) => {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
};

const addLink = (href, rel = 'stylesheet') => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = rel;
  link.async = true;
  document.body.appendChild(link);
};

export const onClientEntry = () => {
  window.onload = () => {
    // addScript('https://fast.wistia.com/embed/medias/9rvl8vgrzg.jsonp');
    // addLink('https://fonts.gstatic.com', 'preconnect');
    // addLink('https://fonts.googleapis.com/css2?family=Crimson+Text&family=IBM+Plex+Sans&family=Source+Serif+Pro&display=swap');
  };
};
