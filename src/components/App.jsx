import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </>
  );
}

export default App;
