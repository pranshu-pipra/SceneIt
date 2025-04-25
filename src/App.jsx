import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
