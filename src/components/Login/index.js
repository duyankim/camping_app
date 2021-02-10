import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
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
            <FormH1>계정에 로그인 하기</FormH1>
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
              Continue
            </FormButton>
            <Link to="/signup">
              <Text>가입하기</Text>
            </Link>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default withRouter(Login);
