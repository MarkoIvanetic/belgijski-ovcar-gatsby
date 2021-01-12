import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import styles from './style/language.module.scss';

const Language = () => (
  <div className={styles.root}>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map((language) => {
          return (
            <a
              key={language}
              rel="alternate"
              className={currentLocale === language ? styles.active : ''}
              hrefLang={language}
              onClick={() => changeLocale(language)}>
              {language.toUpperCase()}
            </a>
          );
        })
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
