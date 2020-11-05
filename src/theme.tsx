import { extendTheme } from '@chakra-ui/core'

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts: { mono: `'Menlo', monospace` },
  breakpoints: ['40em', '52em', '64em'],
})

export default theme
