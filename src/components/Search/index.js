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

const SearchMap = (props) => {
  const url = new URL(window.location.href);
  // console.log(window.location.href = 'dau.net');
  const item = url.searchParams.get("item");

  const { Search } = Input;
  const { Option } = Select;
  const { Meta } = Card;

  const [input, setInput] = useState(null);

  console.log(input);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [placeArr, setPlaceArr] = useState([]);
  const [current, setCurrent] = useState(1);

  const [marker, setMarker] = useState({
    x: null,
    y: null,
  });

  const [search, setSearch] = useState({
    type: "clickMap",
    radius: 10000,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `location/${current}/4/${marker.x}/${marker.y}/${search.radius}`
      );
      setData(response.data.packet);
      setPlaceArr(response.data.packet.items);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search.type === "clickMap" && marker.x && marker.y) {
      console.log("marker", marker, search);
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
      console.log("fetch");
      fetchData();
    } else if (search.type === "keyword") {
      const fetchKeyword = async () => {
        try {
          const response = await axios.get(
            `location/keyword/${current}/4/${input}`
          );
          setData(response.data.packet);
        } catch (e) {
          setError(e);
        }
      };
      fetchKeyword();
    }
  }, [input]);

  useEffect(() => {
    fetchData();
  }, [current]);

  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  const onSearch = (value) => {
    console.log(value);
    setInput(value);
  };

  return (
    <SearchContainer>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ flex: `100%` }}>
        <Col sm={24} xl={12} className="gutter-row">
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
                  <Option value="clickMap">지도 위 클릭하기</Option>
                  <Option value="address">주소로 찾기</Option>
                  <Option value="keyword">캠핑장 이름으로 찾기</Option>
                </Select>

                <Search
                  style={{ width: "50%" }}
                  placeholder="검색"
                  onSearch={onSearch}
                  enterButton
                />
              </Input.Group>
            </SearchFilter>
            <Divider
              orientation="left"
              style={{ paddingLeft: "24px", paddingRight: "24px" }}
            >
              검색결과 {data.totalCount}곳
            </Divider>

            <SearchResult>
              <Row gutter={[12, 12]}>
                {placeArr.map((item, index) => {
                  if (!item.firstImageUrl) {
                    item.firstImageUrl = `https://bit.ly/3rYGoxK`;
                  }
                  return (
                    <Col sm={24} xl={12} key={index}>
                      <Card
                        hoverable
                        key={item.contentId}
                        style={{ width: 300 }}
                        cover={
                          <img alt="campingSite" src={item.firstImageUrl} />
                        }
                        onClick={() => {
                          props.history.push(`/search?item=${item.contentId}`);
                        }}
                      >
                        <Meta
                          title={item.facltNm}
                          description={item.lineIntro}
                        />
                      </Card>
                    </Col>
                  );
                })}
                <Pagination
                  size="small"
                  total={data.totalCount}
                  pageSize={4}
                  current={current}
                  onChange={(e) => {
                    setCurrent(Number(e));
                  }}
                />
              </Row>
            </SearchResult>
          </div>
        </Col>
        <Col sm={24} xl={12} className="gutter-row">
          <Map marker={marker} setMarker={setMarker} data={placeArr} />
        </Col>
      </Row>
    </SearchContainer>
  );
};

export default SearchMap;
