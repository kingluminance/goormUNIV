//4주차 코드에요
import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import DetailPage from "./routes/DetailPage";

function App4() {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h4>제목</h4>
              <div>메인임</div>
            </>
          }
        />
        <Route path="/detail" element={<DetailPage></DetailPage>}>
          <Route path="about" element={<div>멤버</div>}></Route>
        </Route>
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App4;
