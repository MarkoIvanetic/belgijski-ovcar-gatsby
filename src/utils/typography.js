import Typography from 'typography';

const typography = new Typography({
  title: 'Belgian Theme',
  baseFontSize: '16px',
  baseLineHeight: '1.45',
  includeNormalize: false,
  overrideStyles: ({}, options) => ({
    a: {
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'none',
    },
    p: { marginBottom: 0 },
    img: { marginBottom: 0 },
    h3: { marginTop: '15px', marginBottom: '10px' },
    hr: { marginBottom: '1rem' },
  }),
});
export const { scale, rhythm, options } = typography;
export default typography;
