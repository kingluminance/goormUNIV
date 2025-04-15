import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h4>About</h4>
      </div>
      <div className="card">
        <img className="pic" src="/img/car1.jpeg" />
        <div>
          <h4 className="text-item">
            <span style={{ color: "#93dbf0" }}>이름:</span> 왕휘도
          </h4>
          <h4 className="text-item">
            <span style={{ color: "#93dbf0" }}>나이:</span> 20세
          </h4>
          <div>
            <ShowMyself
              present={"안녕하세요! 저는 왕휘도입니다. 반갑습니다!"}
            ></ShowMyself>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowMyself(props) {
  return (
    <div className="text-item">
      <h4 style={{ color: "#93dbf0" }}>자기소개</h4>
      <p>{props.present}</p>
    </div>
  );
}

export default App;
