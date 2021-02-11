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
`;

export const PlaceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
  align-items: stretch;
`;

export const PlaceItem = styled.div`
  box-shadow: 10px 5px 40px 20px darken(#341cac, 5%);
  transition: 0.25s;

  &:hover {
    box-shadow: 10px 5px 40px 20px darken(#341cac, 10%);
  }
`;

export const ImgWrap = styled.div`
  background-image: url("https://gocamping.or.kr/upload/camp/2444/thumb/thumb_720_6783oCTGScUXn9FNIUNHc6Im.jpg");
  height: 150px;
  width: 100%;
  padding: 5px 15px 0px 15px;
  width: 100%;
  background-size: cover;
  color: #fff;
`;

export const Img = styled.img`
  /* width: 100%;
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
  } */
`;

export const Intro = styled.p`
  margin: 0;
  font-weight: 700;
  line-height: 0.5;
`;

export const Content = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 100%;
`;

export const Location = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: grey;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin: 4px 0 4px 0;
`;

export const Description = styled.div`
  padding-bottom: 40px;
  font-size: 13px;
  line-height: 1.8;
  color: #000;
`;

export const ReadMore = styled.div`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #000;
  font-size: 15px;
  transition: 0.25s;

  &:hover {
    transform: translate(10px, 0);
  }
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  z-index: -1;
`;
