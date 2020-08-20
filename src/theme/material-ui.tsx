import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#111',
      },
      secondary: {
        main: '#f0c900',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });