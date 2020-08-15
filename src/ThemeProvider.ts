import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = "#82c8b6";
const seconderyColor="#282c34";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        boxShadow: "inset 0px 1px 3px 0px #5dc993",
        background: `linear-gradient(to bottom, ${primaryColor} 5%, ${seconderyColor} 100%)`,
      },
    },
  },

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: primaryColor,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: seconderyColor,
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
 export default theme;