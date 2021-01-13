import Typography from 'typography';

const typography = new Typography({
  title: 'Belgian Theme',
  baseFontSize: '16px',
  baseLineHeight: '1.45',
  includeNormalize: false,
  googleFonts: [
    {
      name: 'Work Sans',
      styles: ['600'],
    },
    {
      name: 'Quattrocento Sans',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Quattrocento Sans', 'sans-serif'],
  overrideStyles: ({}, options) => ({
    a: {
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
    p: { marginBottom: 0 },
    img: { marginBottom: 0 },
  }),
});
export const { scale, rhythm, options } = typography;
export default typography;
