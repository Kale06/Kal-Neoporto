import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Header } from "./components/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
