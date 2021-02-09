import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./LoginElements";

const Login = (props) => {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">CAMPING TOGO</Icon>
        <FormContent>
          <Form onSubmit={onSubmitHandler}>
            <FormH1>계정에 로그인 하기</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              value={Email}
              onChange={onEmailHandler}
              required
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              value={Password}
              onChange={onPasswordHandler}
              required
            />
            <FormButton type="submit">Continue</FormButton>
            <Text></Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
