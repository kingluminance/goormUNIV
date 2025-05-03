//이게 이제 유효성 검사


import { useState } from "react";

function App5() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value })); 
  };

  const validate = () => {
    const newErrors = { email: "", password: "" };

    if (!form.email.includes("@")) {
      newErrors.email = "이메일 형식이 올바르지 않습니다.";
    }

    if (form.password.length < 6) {
      newErrors.password = "패스워드 는 6자 이상이여야 합니다.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((err) => err); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validate()) {
      alert("회원가입 성공");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="이메일"
        />
        <div>{errors.email}</div>
      </div>
      <div>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
          type="password"
        />
        <div>{errors.password}</div>
      </div>
      <button type="submit">가입하기</button>
    </form>
  );
}
export default App5;
