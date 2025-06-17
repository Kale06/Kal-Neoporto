import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Footer } from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
