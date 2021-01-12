import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import styles from './style/language.module.scss';

const Language = () => (
  <div className={styles.root}>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map((language) => {
          console.log(language);
          return (
            <a
              key={language}
              rel="alternate"
              hrefLang={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `yellow` : `white`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}>
              {language.toUpperCase()}
            </a>
          );
        })
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
