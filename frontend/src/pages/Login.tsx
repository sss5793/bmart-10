import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { COLOR } from "../constants/style";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.YELLOW_1};
  padding: 20px;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  margin-top: 70px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  padding: 0 10px;
  background: #ffffff63;
  border: 0;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${COLOR.GREEN_1};
  color: ${COLOR.WHITE};
  border-radius: 5px;
  border: 0;
  margin-top: 20px;
  font-size: 1rem;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 70px;
  text-align: center;
  color: ${COLOR.GREEN_1};
  font-weight: 600;
`;

const Login = (): JSX.Element => {
  const history = useHistory();
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    // console.log(e, user);
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const loginActions = (): void => {
    localStorage.setItem("token", "token");
    history.push("/");
  };

  const goRegister = (): void => {
    history.push("/register");
  };

  return (
    <Wrapper>
      <Image>
        <img src="/asset/images/gom.png" width={"50%"} />
        <img src="/asset/images/logo_horizon.png" width={"50%"} />
      </Image>
      <Form>
        <Input name="id" type="text" onChange={onChange} placeholder="아이디" />
        <Input
          name="password"
          type="password"
          value={user.id}
          onChange={onChange}
          placeholder="비밀번호"
        />
        <Button onClick={loginActions}>로그인</Button>
      </Form>
      <Bottom>
        <p onClick={goRegister}>회원가입</p>
      </Bottom>
    </Wrapper>
  );
};

export default Login;
