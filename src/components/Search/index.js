import React, { useState, useEffect, useReducer, useCallback } from "react";
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

const INITIAL_STATE = { mapX: 33.452671, mapY: 126.574792 };

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_MAPX":
      return { ...state, mapX: action.value };
    case "CHANGE_MAPY":
      return { ...state, mapY: action.value };
    default:
      return state;
  }
}

export const SearchMapDispatch = React.createContext(null);

const SearchMap = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const onClick = useCallback((e) => {
    const { value } = e.target;
    dispatch({
      type: "CHANG_MAPX",
      mapX,
    });
  });

  const { Search } = Input;
  const { Option } = Select;
  const { Meta } = Card;
  const [input, setInput] = useState(null);
  const [radius, setRadius] = useState(1000);
  const [page, setPage] = useState(1);
  const [mapX, setMapX] = useState(null);
  const [mapY, setMapY] = useState(null);

  console.log(radius);
  console.log(input);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  function searchGeo() {
    return axios({
      method: "GET",
      url: "https://dapi.kakao.com/v2/local/search/address.json",
      headers: { Authorization: `KakaoAK fa78162d353e2096b3f7a6da0a6e0dd6` },
      params: {
        query: input,
      },
    });
  }
  searchGeo()
    .then((res) => {
      console.log(`${res.data.documents[0].x}/${res.data.documents[0].y}`);
      setMapX(res.data.documents[0].x);
      setMapY(res.data.documents[0].y);
    })
    .catch((e) => {
      console.log("search error", e);
    });

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      setData(null);
      const response = await axios.get(
        `location/1/4/${mapX}/${mapY}/${radius}`
      );
      setData(response.data.packet.items);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;
  if (!data) return null;

  function onChange(value) {
    console.log("onChange:", value);
  }

  const onSearch = (value, e) => {
    console.log(value);
    e.preventDefault();
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
                  defaultValue={1000}
                  min={1}
                  max={20000}
                  formatter={(value) => `${value}m내`}
                  parser={(value) => value.replace("m내", "")}
                  onChange={(value) => setRadius(value)}
                  style={{ width: "20%" }}
                />
                <Select
                  defaultValue="주소"
                  onChange={onChange}
                  style={{ width: "30%" }}
                >
                  <Option value="address">주소</Option>
                  <Option value="nearby">가까운 거리</Option>
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
            <SearchMapDispatch.Provider value={dispatch}>
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
            </SearchMapDispatch.Provider>
          </div>
        </Col>
        <Col sm={24} xl={14} className="gutter-row">
          <Map onClick={onClick} />
        </Col>
      </Row>
    </SearchContainer>
  );
};

export default SearchMap;
