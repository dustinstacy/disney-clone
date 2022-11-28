import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  async function getMovies(db) {
    const moviesColl = collection(db, "movies");
    const movieSnapshot = await getDocs(moviesColl);
    const movieList = movieSnapshot.docs.map((doc) => doc.data());
    return movieList;
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
