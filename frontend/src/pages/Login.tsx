import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { COLOR } from '../constants/style';

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

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  padding: 0 10px;
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

const Login = (): JSX.Element => {
  const history = useHistory();
  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  const onChange = (e: any) => {
    e.persist();
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const loginActions = () => {
    console.log(user);
    localStorage.setItem('token', 'token');
    history.push('/home');
  };

  return (
    <Wrapper>
      <img src="/asset/images/gom.png" width={'50%'} />
      <img src="/asset/images/logo_horizon.png" width={'50%'} />
      <Input name="id" type="text" onChange={onChange} placeholder="아이디" />
      <Input
        name="password"
        type="password"
        onChange={onChange}
        placeholder="패스워드"
      />
      <Button onClick={loginActions}>로그인</Button>
    </Wrapper>
  );
};

export default Login;
