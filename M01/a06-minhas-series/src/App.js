import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import Genres from "./Genres";
import Home from "./Home";
import NewGenre from "./NewGenre";
import EditGenre from "./EditGenre";

function App() {
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    axios.get("/api").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generos/:id" element={<EditGenre />} />
        <Route path="/generos" element={<Genres />} />
        <Route path="/generos/novo" element={<NewGenre />} />
      </Routes>
    </Router>
  );
}

export default App;
