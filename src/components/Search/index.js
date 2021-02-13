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
  Main,
} from "./SearchElements";
import { Space, Input, Pagination, Card } from "antd";

const SearchMap = () => {
  const { Search } = Input;
  const { Meta } = Card;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const onSearch = (value) => {
    console.log(value);
    setInput(value);
  };

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
                </Space>
              </SearchFilter>
              <SearchResult>
                <PlaceList>
                  {data.map((item) => {
                    return (
                      <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt="example" src={item.firstImageUrl} />}
                      >
                        <Meta
                          title={item.facltNm}
                          description={item.lineIntro}
                        />
                      </Card>
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
