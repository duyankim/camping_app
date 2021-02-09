import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeaderContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  font-family: "Noto Sans KR", sans-serif;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%), rgba(0,0,0,0.6) 100%), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ImgBg = styled.div`
  width: 100%;
  height: 100%;
  background: url("//bit.ly/3rn2hGs") no-repeat 50% 50%;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderH1 = styled.div`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeaderP = styled.div`
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-top: 24px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeaderBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 12px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 12px;
  font-size: 20px;
`;
