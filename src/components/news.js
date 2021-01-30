import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import styles from './style/news.module.scss';
import Gallery from './gallery/gallery';

const SingleNews = ({ images, date, title, body }) => {
  console.log(images);
  return (
    <>
      <div className={styles.news}>
        <span className={styles.date}>{`${date}`}</span>
        <h3>
          <b>{`${title}`}</b>
        </h3>
        {body ? <p>{body}</p> : ''}
        {images.length ? <Gallery images={images} title={''} /> : ''}
      </div>
    </>
  );
};

SingleNews.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string,
};

const parseNews = (news, locale) => {
  const id = news.id;
  const slike = news.slike || [];

  let title, body;

  try {
    title = news[`title_${locale}`];
  } catch (error) {
    title = '';
    console.warn('Title missing from news:', news);
  }

  try {
    body = news[`body_${locale}`][`body_${locale}`];
  } catch (error) {
    body = '';
  }

  return { id, slike, title, body };
};

const News = ({ children, intl }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulObavijest {
        nodes {
          id
          updatedAt(formatString: "DD/MM/yyyy")
          slike {
            thumb: fluid(maxWidth: 200, maxHeight: 200) {
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
  return (
    <div className={`${styles.root} shadow-md callout-left`}>
      {news.map((singleNews) => {
        const { id, slike, title, body } = parseNews(singleNews, intl.locale);
        return <SingleNews key={id} date={singleNews.updatedAt} images={slike} title={title} body={body} />;
      })}
    </div>
  );
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
