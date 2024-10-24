import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../App.css";
import Header from "./header";

const MainPage = ({ showSection }) => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div>
          <p>{showSection}</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainPage;
