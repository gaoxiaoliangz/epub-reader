const mobile: ReaderConfig = {
  layout: {
    margin: 35,
    lineHeight: 26,
    fontSize: 20,
    aspectRatio: 16 / 9,
    width: 0
  }
}

const desktop: ReaderConfig = {
  layout: {
    margin: 40,
    lineHeight: 26,
    fontSize: 18,
    aspectRatio: 16 / 9,
    width: 600
  }
}

const getLayoutConfig = isMobile => configName => isMobile
  ? mobile.layout[configName]
  : desktop.layout[configName]

export { mobile, desktop, getLayoutConfig }
