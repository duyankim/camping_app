import React, { useEffect } from "react";
const { kakao } = window;

const Map = (props) => {
  console.log(props);
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.486509, 127.188378),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [];
    props.data.map((item) => {
      positions.push({
        title: item.facltNm,
        latlng: new kakao.maps.LatLng(item.position[1], item.position[0]),
      });
    });
    console.log(positions);

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;

      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter(),
      });
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      marker.setMap(map);

      console.log(`click위도: ${latlng.getLat()}`);
      console.log(`click경도: ${latlng.getLng()}`);
      props.setMarker({
        x: latlng.getLng(),
        y: latlng.getLat(),
      });
    });
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
    </>
  );
};

export default Map;
