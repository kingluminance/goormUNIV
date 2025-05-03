import { useState } from "react";
import { useLike } from "./hooks/useForm";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import CardBox from "./components/Card";

function App6() {
  let [form, setForm] = useState({ title: "", contents: "" });
  let [post, setPost] = useState([
    {
      title: "react배워왔습니다.",
      contents: "리액트 라우트를 이용한 세부 페이지 구성에서 ...",
    },
    {
      title: "원주 맛집 추천",
      contents:
        "최근에 강릉원주대학교 근처 둥지 감자탕을 갔는데요? 강원도라 그런지 감자가 맛있었습니다.",
    },
  ]);

  let [error, setError] = useState({ title: "", contents: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = { title: "", contents: "" };

    if (form.title.length < 2) {
      newErrors.title = "제목은 2글자 이상이여야 합니다";
    }

    if (form.contents.length < 10) {
      newErrors.contents = "내용은 10자를 넘겨야 합니다.";
    }

    setError(newErrors);

    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("글 발행");
      let copy = [...post];
      copy.unshift(form);
      setPost(copy);
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <BlogMain
              post={post}
              form={form}
              error={error}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/detail/:id" element={<BlogDetail post={post} />} />
      </Routes>
    </div>
  );
}

function BlogMain({ post, form, error, handleChange, handleSubmit }) {
  return (
    <>
      <div className="nav-bar">
        <h4>Blog</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder=" 제목을 입력하세요"
          />
          <div>{error.title}</div>
          <input
            name="contents"
            value={form.contents}
            onChange={handleChange}
            placeholder="내용을 입력하세요"
          />
          <div>{error.contents}</div>
        </div>
        <button type="submit">글 발행하기</button>
      </form>
      {post.map((a, i) => (
        <CardBox cardTitle={a.title} key={i}>
          <Link to={`/detail/${i}`}>자세히 보기</Link>
        </CardBox>
      ))}
    </>
  );
}

function BlogDetail({ post }) {
  let { id } = useParams();
  const currentPost = post[id];
  return (
    <div>
      <h2>{currentPost.title}</h2>
      <p>{currentPost.contents}</p>
    </div>
  );
}

export default App6;
