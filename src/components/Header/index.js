import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderBg,
  ImgBg,
  HeaderContent,
  HeaderH1,
  HeaderP,
  HeaderBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeaderElements";
import { Button } from "../ButtonElement";

const Header = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeaderContainer>
      <HeaderBg>
        <ImgBg />
      </HeaderBg>
      <HeaderContent>
        <HeaderH1>쉽고 빠른 나만의 차박장소와 캠핑장 찾기</HeaderH1>
        <HeaderP>가까운 캠핑장을 지도에서 찾아보세요.</HeaderP>
        <HeaderBtnWrapper>
          <Button
            to="search"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            padding="big"
          >
            캠핑장 검색 {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
