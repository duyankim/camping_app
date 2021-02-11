import React from "react";
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
import { Space, Input, Pagination } from "antd";

const SearchMap = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchRow>
            <Aside>
              <SearchFilter>
                {/*<Form>
                  <InputWrapper>
                    <Label />
                    <Input />
                  </InputWrapper>
                  <Button>검색</Button>
                </Form>*/}
                <Space direction="vertical">
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                  />
                </Space>
              </SearchFilter>
              <SearchResult>
                <PlaceList>
                  <PlaceItem>
                    <ImgWrap>
                      <Img />
                      <Intro>여름</Intro>
                    </ImgWrap>
                    <Content>
                      <Location>
                        전라북도 진안군 주천면 동상주천로 1716
                      </Location>
                      <Name>운일암반일암관광지 야영장</Name>
                      <Description>
                        웨스턴캠프는 충남 아산시 음봉면에 자리 잡고 있다.
                        아산시청을 기점으로 5㎞가량 떨어졌다. 자동차를 타고
                        시민로, 곡교천로, 충무로를 번갈아 달리면 닿는다.
                        도착까지 걸리는 시간은 10분 안팎이다.
                      </Description>
                      <ReadMore>더보기</ReadMore>
                    </Content>
                  </PlaceItem>
                </PlaceList>
              </SearchResult>
              <Pagination size="small" total={50} />
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
