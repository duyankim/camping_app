import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #fbab7e;
  background-image: linear-gradient(0deg, #fbab7e 0%, #f7ce68 100%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkRouter)`
  margin-left: 32px;
  margin-top: 24px;
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-top: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700px;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #ffb435;
  padding: 18px 0;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 32px;
`;

export const KakaoLogin = styled.a`
  display: flex;
  justify-content: center;
`;

export const KakaoBtn = styled.img`
  width: 336px;
  height: 100%;
`;
