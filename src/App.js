import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MainPage from "./components/main-page";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/meet-the-team"
            element={<MainPage showSection="TeamPage" />}
          />
          <Route
            path="/wedding-photography-pricing"
            element={<MainPage showSection="PricingPage" />}
          />
          <Route
            path="/contact"
            element={<MainPage showSection="ContactPage" />}
          />
          <Route path="/" element={<MainPage showSection="FrontPage" />} />
          <Route
            path="/wedding-photography-details"
            element={<MainPage showSection="FaqPage" />}
          />
          <Route
            path="/availability"
            element={<MainPage showSection="AvailabilityPage" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
