import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
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
} from "./RegisterElements";

const Register = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [errorsFromSubmit, setErrorsFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    const body = {
      id: data.id,
      pw: data.pw,
      name: data.name,
      address: data.address,
    };

    try {
      setLoading(true);
      await axios.post(`/user`, body, { withCredentials: true });
      setLoading(false);
      props.history.push("/login");
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
            <FormH1>Start a new journey</FormH1>

            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput name="name" ref={register({ required: true })} />
            {errors.name && <p>이름을 입력하세요.</p>}

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

            <FormLabel htmlFor="address">Address</FormLabel>
            <FormInput
              type="address"
              name="address"
              ref={register({ required: false })}
            />
            {errors.pw && errors.pw.type === "required" && (
              <p>비밀번호를 입력하세요.</p>
            )}

            {errorsFromSubmit && <p>{errorsFromSubmit}</p>}
            <FormButton type="submit" disabled={loading}>
              Login
            </FormButton>
            <KakaoLogin href="/user/kakao/oauth">
              <KakaoBtn src={kakao_login_btn} alt="카카오 로그인" />
            </KakaoLogin>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default withRouter(Register);
