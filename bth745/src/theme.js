import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f93a3a',
          },
          secondary: {
            main: '#000',
          },
    },
    typography: {
      fontFamily: [
        'Nunito',
        'Roboto',
        'Arial',
        'sans-serif'
      ].join(','),
    }
})

theme = responsiveFontSizes(theme);

export default theme;
