import { useState } from "react";

function App2() {
  let [toDo, setToDo] = useState([
    "react공부하기",
    "운동하기",
    "투두앱 완성하기",
  ]);

  let [isFiveMore, setIsFiveMore] = useState(false);

  return (
    <div>
      <h1>To-do List</h1>
      {toDo.map(function (a) {
        return (
          <div>
            <input type="checkbox" />
            <span>{a}</span>
            <button
              onClick={function () {
                let copyToDo = [...toDo];
                copyToDo.splice(toDo.indexOf(a), 1);
                setToDo(copyToDo);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <div>
        <input type="text" id="inputText" />
        <button
          onClick={function () {
            let copyToDo = [...toDo];
            copyToDo.push(document.querySelector("#inputText").value);
            setToDo(copyToDo);
            if (toDo.length > 3) {
              setIsFiveMore(true);
            }
          }}
        >
          추가
        </button>
      </div>

      <FiveMore isFiveMore={isFiveMore} />
    </div>
  );

  function FiveMore(props) {
    if (props.isFiveMore == true) {
      return (
        <div>
          <h4>5개 이상됨</h4>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default App2;
