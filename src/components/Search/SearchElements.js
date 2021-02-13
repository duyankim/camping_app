import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 100vh;
  color: #fff;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SearchRow = styled.div`
  display: flex;
  flex: 1;
`;

export const Aside = styled.aside`
  display: flex;
  flex: none;
  width: 50%;
  background-color: #f7f9fc;
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
  flex-direction: column;
`;

export const SearchFilter = styled.div`
  padding: 80px 24px 20px 24px;
  display: flex;
  flex-direction: row;
`;

export const Form = styled.form`
  max-width: 400px;
  padding-left: 24px;
  display: flex;
`;

export const InputWrapper = styled.div`
  /* width: 280px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 23px;
  box-shadow: 0px 8px 20px 0px rgb(0 0 0 / 15%);
  padding: 16px 20px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row; */
`;

export const Label = styled.label`
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Input = styled.input`
  outline: none;
  margin: 0;
  border: none;
  box-shadow: none;
  width: 100%;
`;

export const Button = styled.button`
  /*min-width: 30px;
  height: 45px;
  margin-left: 20px;
  background: #ffb435;
  color: #333;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  transition: all 0.4s ease;
  padding: 0 20px;
  box-shadow: 0px 8px 20px 0px rgb(0 0 0 / 15%);*/
`;

export const SearchResult = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  margin-bottom: 15px;
  overflow: scroll;
`;

export const PlaceList = styled.div``;

export const Main = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  z-index: -1;
`;
