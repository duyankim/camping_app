import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import {
  SearchContainer,
  SearchFilter,
  SearchResult,
  PlaceList,
} from "./SearchElements";
import {
  Divider,
  Input,
  InputNumber,
  Select,
  Pagination,
  Card,
  Row,
  Col,
} from "antd";

const SearchMap = () => {
  const { Search } = Input;

  const { Option } = Select;

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
          `location/1/4/127.3105215/37.904902/15000`
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
    <SearchContainer>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ flex: `100%` }}>
        <Col sm={24} xl={10} className="gutter-row">
          <div>
            <SearchFilter>
              <Input.Group compact>
                <InputNumber
                  defaultValue={100}
                  min={1}
                  max={20000}
                  formatter={(value) => `반경 ${value}m`}
                  parser={(value) => value.replace("m", "")}
                  onChange={onChange}
                />
                <Select
                  defaultValue="주소"
                  onChange={onChange}
                  style={{ width: "20%" }}
                >
                  <Option value="address">주소</Option>
                  <Option value="nearby">가까운 거리</Option>
                  <Option value="keyword">이름</Option>
                </Select>

                <Search
                  style={{ width: "40%" }}
                  placeholder="검색"
                  onSearch={onSearch}
                  enterButton
                />
              </Input.Group>
            </SearchFilter>
            <Divider orientation="left">검색결과</Divider>
            <SearchResult />
          </div>
        </Col>
        <Col sm={24} xl={14} className="gutter-row">
          <Map />
        </Col>
      </Row>
    </SearchContainer>
  );
};

export default SearchMap;
