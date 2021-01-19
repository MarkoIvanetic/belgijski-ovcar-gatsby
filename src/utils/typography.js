import Typography from 'typography';

const typography = new Typography({
  title: 'Belgian Theme',
  baseFontSize: '16px',
  baseLineHeight: '1.45',
  includeNormalize: false,
  googleFonts: [
    {
      name: 'Crimson Text',
      styles: ['600'],
      // subsets: ['latin-ext'],
    },
    {
      name: 'Source Serif Pro',
      styles: ['600'],
      // subsets: ['latin-ext'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700'],
      // subsets: ['latin-ext'],
    },
  ],
  headerFontFamily: ['Source Serif Pro', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  overrideStyles: ({}, options) => ({
    a: {
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
    p: { marginBottom: 0 },
    img: { marginBottom: 0 },
    h3: { marginTop: '15px', marginBottom: '10px' },
  }),
});
export const { scale, rhythm, options } = typography;
export default typography;
