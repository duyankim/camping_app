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
  width: 40%;
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
  width: 280px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 23px;
  box-shadow: 0px 8px 20px 0px rgb(0 0 0 / 15%);
  padding: 16px 20px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
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
  min-width: 30px;
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
  box-shadow: 0px 8px 20px 0px rgb(0 0 0 / 15%);
`;

export const SearchResult = styled.div`
  padding-right: 24px;
  padding-left: 60px;
`;

export const PlaceList = styled.div``;

export const PlaceItem = styled.div`
  width: 95%;
  position: relative;
  max-width: 700px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 300px;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
  }
`;

export const ImgWrap = styled.div`
  width: 220px;
  flex-shrink: 0;
  height: 220px;
  background-image: url("https://gocamping.or.kr/upload/camp/2444/thumb/thumb_720_6783oCTGScUXn9FNIUNHc6Im.jpg");
  background-size: cover;
  box-shadow: 4px 13px 30px 1px rgba(34, 35, 58, 0.2);
  border-radius: 20px;
  transform: translateX(-60px);
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    // width: 45%;
  }
  @media screen and (max-width: 768px) {
    transform: translateY(-50%);
    width: 90%;
  }
  @media screen and (max-width: 576px) {
    width: 95%;
  }
  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 270px;
  }
`;

export const Content = styled.div`
  padding-right: 25px;
  @media screen and (max-width: 992px) {
    // width: 55%;
  }
  @media screen and (max-width: 768px) {
    margin-top: -80px;
    text-align: center;
    padding: 0 30px;
  }

  @media screen and (max-width: 576px) {
    padding: 0;
  }
  > * {
    opacity: 0;
    transform: translateY(25px);
    transition: all 0.4s;
  }
`;

export const Location = styled.span`
  color: #7b7992;
  margin-bottom: 15px;
  display: block;
  font-weight: 500;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #0d0925;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  color: #4e4a67;
  margin-bottom: 30px;
  line-height: 1.5em;
`;

export const ReadMore = styled.div`
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  z-index: -1;
`;
