//3주차 코드에요
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App3() {
  let [userInfo, setUserInfo] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    axios //200ms postman mock API
      .get("https://9f6e9fea-e8d5-4f6f-ac21-4cfa686caeeb.mock.pstmn.io/")
      .then((result) => {
        setUserInfo(result.data);
        setIsLoading(true);
      })
      .catch(() => {
        console.log("GET요청 실패");
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div style={{ justifyContent: "left" }} className="nav-bar">
        <h4>유저정보</h4>
      </div>
      {isLoading ? (
        userInfo.map((user, i) => (
          <UserCard key={i} userName={user.username}>
            <h4>name: {user.name}</h4>
            <h4>email: {user.email}</h4>
          </UserCard>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function UserCard({ children, userName }) {
  return (
    <div className="cardCollector">
      <div></div>
      <div className="card">
        <h2>nickname:{userName}</h2>
        {children}
      </div>
    </div>
  );
}

export default App3;
