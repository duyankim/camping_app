import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import { SearchContainer, SearchFilter, SearchResult } from "./SearchElements";
import {
  Divider,
  Input,
  InputNumber,
  Select,
  Row,
  Col,
  Pagination,
  Card,
} from "antd";

const SearchMap = () => {
  const { Search } = Input;
  const { Option } = Select;
  const { Meta } = Card;

  const [input, setInput] = useState(null);
  const [page, setPage] = useState(1);

  console.log(input);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [marker, setMarker] = useState({
    x: 126.574792,
    y: 33.452671,
  });

  const [search, setSearch] = useState({
    type: "clickMap",
    page: 1,
    radius: 10000,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `location/${page}/4/${marker.x}/${marker.y}/${search.radius}`
      );
      setData(response.data.packet.items);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    console.log("marker", marker, search);
    if (search.type === "clickMap") {
      fetchData();
    }
  }, [marker]);

  useEffect(() => {
    if (search.type === "address") {
      function searchGeo() {
        return axios({
          method: "GET",
          url: "https://dapi.kakao.com/v2/local/search/address.json",
          headers: {
            Authorization: `KakaoAK fa78162d353e2096b3f7a6da0a6e0dd6`,
          },
          params: {
            query: input,
          },
        });
      }

      searchGeo(input)
        .then((res) => {
          console.log(`${res.data.documents[0].x}/${res.data.documents[0].y}`);
          setMarker({ x: res.data.documents[0].x, y: res.data.documents[0].y });
        })
        .catch((e) => {
          console.log("local search error", e);
        });
      fetchData();
    }
    // eslint-disable-next-line
  }, [input]);

  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  function onChange(value) {
    search.type = value;
    console.log("onChange:", value);
    console.log("onChange:", search);
  }

  const onSearch = (value) => {
    console.log(value);
    setInput(value);
  };

  return (
    <SearchContainer>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ flex: `100%` }}>
        <Col sm={24} xl={10} className="gutter-row">
          <div>
            <SearchFilter>
              <Input.Group compact>
                <InputNumber
                  defaultValue={10000}
                  min={1}
                  max={20000}
                  formatter={(value) => `${value}m내`}
                  parser={(value) => value.replace("m내", "")}
                  onChange={(value) => {
                    search.radius = value;
                    setSearch({ ...search });
                  }}
                  style={{ width: "20%" }}
                />

                <Select
                  defaultValue="주소"
                  onChange={(value) => {
                    search.type = value;
                    setSearch({ ...search });
                  }}
                  style={{ width: "30%" }}
                  value={search.type}
                >
                  <Option value="address">주소로 찾기</Option>
                  <Option value="clickMap">지도 위 클릭하기</Option>
                </Select>

                <Search
                  style={{ width: "50%" }}
                  placeholder="검색"
                  onSearch={onSearch}
                  enterButton
                />
              </Input.Group>
            </SearchFilter>
            <Divider orientation="left">검색결과</Divider>

            <SearchResult>
              <Row gutter={[12, 12]}>
                {data.map((item) => {
                  if (!item.firstImageUrl) {
                    item.firstImageUrl = `https://bit.ly/3rYGoxK`;
                  }
                  return (
                    <Col sm={24} xl={12}>
                      <Card
                        hoverable
                        key={item.contentId}
                        style={{ width: 300 }}
                        cover={<img alt="example" src={item.firstImageUrl} />}
                      >
                        <Meta
                          title={item.facltNm}
                          description={item.lineIntro}
                        />
                      </Card>
                    </Col>
                  );
                })}
                <Pagination size="small" total={12} />
              </Row>
            </SearchResult>
          </div>
        </Col>
        <Col sm={24} xl={14} className="gutter-row">
          <Map marker={marker} setMarker={setMarker} />
        </Col>
      </Row>
    </SearchContainer>
  );
};

export default SearchMap;
