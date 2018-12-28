import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400', '700', '900'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '700']
    }
  ],
  bodyFontFamily: ['Nunito'],
  headerWeight: '900',
  bodyWeight: '400',
})

export default typography
