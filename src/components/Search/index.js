import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import {
  SearchContainer,
  SearchWrapper,
  SearchRow,
  Aside,
  SearchFilter,
  SearchResult,
  PlaceList,
  PlaceItem,
  Main,
  ImgWrap,
  Img,
  Intro,
  Content,
  Location,
  Name,
  Description,
  ReadMore,
} from "./SearchElements";
import { Space, Input, Pagination, Slider } from "antd";

const SearchMap = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const [data, setData] = useState([]);
  const [coord, setCoord] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:3005/location/1/4/127.4030939/35.9774208/1500", {
          withCredentials: true,
        })
        .then((response) => {
          setData(response.packet.items);
        });
    };
    fetchData();
  }, [data]);

  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchRow>
            <Aside>
              <SearchFilter>
                <Space direction="vertical">
                  <Search
                    placeholder="이름으로 검색"
                    onSearch={onSearch}
                    enterButton
                  />
                  <Slider
                    range
                    step={20}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                  />
                </Space>
              </SearchFilter>
              <SearchResult>
                <PlaceList>
                  {data.map((item) => {
                    return (
                      <PlaceItem>
                        <ImgWrap>
                          <Img />
                          <Intro>{item.lctCl}</Intro>
                        </ImgWrap>
                        <Content>
                          <Location>{item.addr1}</Location>
                          <Name>{item.facltNm}</Name>
                          <Description>{item.lineIntro}</Description>
                          <ReadMore>더보기</ReadMore>
                        </Content>
                      </PlaceItem>
                    );
                  })}
                </PlaceList>
              </SearchResult>
              <Pagination size="small" total={5} />
            </Aside>
            <Main>
              <Map />
            </Main>
          </SearchRow>
        </SearchWrapper>
      </SearchContainer>
    </>
  );
};

export default SearchMap;
