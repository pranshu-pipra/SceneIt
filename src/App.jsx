import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </main>
  );
}

export default App;
