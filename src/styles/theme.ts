import { createMuiTheme } from '@material-ui/core/styles'

const light = {
  background: {
    paper: '#fff',
    default: '#fff',
  },
}

const dark = {
  background: {
    paper: '#424242',
    default: '#303030',
  },
}

interface GenerateThemeProps {
  isDark?: boolean
}

const generateTheme = ({ isDark }: GenerateThemeProps = {}) =>
  createMuiTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
      ...(isDark ? dark : light),
    },
  })

export default generateTheme
