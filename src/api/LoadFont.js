import WebFont from 'webfontloader';




function LoadFont() {
  WebFont.load({
    google: {
      families: [  "Inter"  ]
    }
  })
}

export default LoadFont;