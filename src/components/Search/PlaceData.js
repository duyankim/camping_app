import { useState, useEffect } from "react";
import axios from "axios";
import {
  ImgWrap,
  Img,
  Content,
  Location,
  Name,
  Description,
  ReadMore,
} from "./SearchElements";

const PlaceData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = axios
      .get(
        "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=AmGAdKF1Eqj9PH9CP%2FOfKqp6wuxM3WLwpngoREXYAKuWGlTwfrhUYb6PujCeOYJFp4cyP2H8slrQz2bAP58INg%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json"
      )
      .then((response) => {
        const responseArr = response.body.items.item;
        setData(responseArr.slice(0, 3));
      });
    fetchData();
  }, []);

  return (
    <>
      <ImgWrap>
        <Img src={data.firstImageUrl} />
      </ImgWrap>
      <Content>
        <Location>{data.addr1}</Location>
        <Name>{data.facItNm}</Name>
        <Description>{data.lineIntro}</Description>
        <ReadMore />
      </Content>
    </>
  );
};

export default PlaceData;
