import Typography from 'typography'

const typography = new Typography({
    baseFontSize: "18px",
    googleFonts: [
        {
            name: 'Nunito',
            styles: [
                '400',
                '700',
                '900'
            ]
        }
    ],
    headerFontFamily: ['Nunito'],
    bodyFontFamily: ['Nunito'],
    headerWeight: '900',
    bodyWeight: '700'
})

export default typography