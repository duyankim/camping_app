import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import kakao_login_btn from "../../img/kakao_login_large_narrow.png";
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
  KakaoLogin,
  KakaoBtn,
  LinkSignUp,
  Text,
} from "./LoginElements";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [errorsFromSubmit, setErrorsFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const body = {
      id: data.id,
      pw: data.pw,
    };

    try {
      setLoading(true);
      await axios.post(`/user/login`, body, { withCredentials: true });
      setLoading(false);
      props.history.push("/");
    } catch (error) {
      setErrorsFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorsFromSubmit("");
      }, 5000);
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">CAMPING TOGO</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormH1>Welcome Back</FormH1>
            <FormLabel htmlFor="id">Id</FormLabel>
            <FormInput type="id" name="id" ref={register({ required: true })} />
            {errors.id && <p>아이디를 입력하세요.</p>}
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              name="pw"
              ref={register({ required: true })}
            />
            {errors.password && errors.password.type === "required" && (
              <p>비밀번호를 입력하세요.</p>
            )}

            {errorsFromSubmit && <p>{errorsFromSubmit}</p>}
            <FormButton type="submit" disabled={loading}>
              Login
            </FormButton>
            <KakaoLogin href="/user/kakao/oauth">
              <KakaoBtn src={kakao_login_btn} alt="카카오 로그인" />
            </KakaoLogin>
            <LinkSignUp to="/signup">
              <Text>Sign up</Text>
            </LinkSignUp>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default withRouter(Login);
