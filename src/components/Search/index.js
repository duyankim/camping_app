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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `location/1/3/127.3105215/37.904902/1500`
        );
        setData(response.data.packet.items);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <PlaceList>Loading...</PlaceList>;
  }
  if (!data) {
    return null;
  }

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
