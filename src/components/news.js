import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import styles from './style/news.module.scss';
import Gallery from './gallery/gallery';

const SingleNews = ({ images, title, body }) => {
  return (
    <>
      <div className={styles.root}>
        <h3>
          <b>{title}</b>
        </h3>
        <p>{body}</p>
        <Gallery images={images} title={''} />
      </div>
      <hr />
    </>
  );
};

const News = ({ children, intl }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulObavijest {
        nodes {
          id
          slike {
            thumb: fluid(maxWidth: 220, maxHeight: 220) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
            full: fluid(maxWidth: 1024) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
            thumbAlt: title
            caption: title
          }
          title_de
          title_en
          title_hr
          body_de {
            body_de
          }
          body_en {
            body_en
          }
          body_hr {
            body_hr
          }
        }
      }
    }
  `);
  const { nodes: news } = data.allContentfulObavijest;
  // const slike = data.contentfulObavijest.slike;
  // const title = data.contentfulObavijest[`title_${intl.locale}`];
  // const body = data.contentfulObavijest[`body_${intl.locale}`];

  return news.map((singleNews) => {
    const id = singleNews.id;
    const slike = singleNews.slike;
    const title = singleNews[`title_${intl.locale}`];
    const body = singleNews[`body_${intl.locale}`][`body_${intl.locale}`];
    console.log(slike);
    console.log(title);
    console.log(body);
    // return <SingleNews key={id} images={'slike'} title={'title'} body={'body'} />;
    return <SingleNews key={id} images={slike} title={title} body={body} />;
  });
};

News.propTypes = {
  children: PropTypes.object,
  data: PropTypes.shape({
    file: PropTypes.object,
  }),
  intl: PropTypes.shape({
    locale: PropTypes.string,
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(News);
