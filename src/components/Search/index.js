import React from "react";
import Map from "./Map";
import {
  SearchContainer,
  SearchWrapper,
  SearchRow,
  Aside,
  SearchFilter,
  Form,
  InputWrapper,
  Label,
  Input,
  Button,
  SearchResult,
  PlaceList,
  PlaceItem,
  Main,
  ImgWrap,
  Img,
  Content,
  Location,
  Name,
  Description,
  ReadMore,
} from "./SearchElements";

const Search = () => {
  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchRow>
            <Aside>
              <SearchFilter>
                <Form>
                  <InputWrapper>
                    <Label />
                    <Input />
                  </InputWrapper>
                  <Button>검색</Button>
                </Form>
              </SearchFilter>
              <SearchResult>
                <PlaceList>
                  <PlaceItem>
                    <ImgWrap>
                      <Img />
                    </ImgWrap>
                    <Content>
                      <Location>
                        전라북도 진안군 주천면 동상주천로 1716
                      </Location>
                      <Name>운일암반일암관광지 야영장</Name>
                      <Description></Description>
                      <ReadMore />
                    </Content>
                  </PlaceItem>
                </PlaceList>
              </SearchResult>
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

export default Search;
