import Layout from "./Components/Layout";
import Home from "./Viewer/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
const theme = createTheme({
  palette: {
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="content">
          <Layout>
            <Home />
          </Layout>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
