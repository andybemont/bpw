import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../App.css";
import Footer from "./footer";
import Header from "./header";

const MainPage = ({ showSection }) => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
          <p>{showSection}</p>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainPage;
