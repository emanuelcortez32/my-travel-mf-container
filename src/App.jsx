import { AppContainer } from "./components/common/AppContainer";
import { SearchBar } from "./components/home/SearchBar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { RemoteMicrofront } from "./components/common/RemoteMicrofront";

const appTheme = createTheme({
  palette: {
    background: {
      default: "#251D3A",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppContainer>
        <Grid container>
          <Grid item xs={12} align="center" margin={3}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} align="center" margin={3}>
            <RemoteMicrofront microfeName="trackerFlights" />
          </Grid>
        </Grid>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
