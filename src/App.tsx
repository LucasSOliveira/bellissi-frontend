import Header from "./pages/main";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
