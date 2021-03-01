import React, { useEffect } from "react";
const { kakao } = window;

const Map = (props) => {
  console.log(props);
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(36.486509, 127.188378),
    level: 6,
  };
  const map = new kakao.maps.Map(container, options);

  useEffect(() => {
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

    // 마커를 표시할 위치와 title 객체 배열입니다
    var points = [];
    props.data.map((item) => {
      return points.push({
        title: item.facltNm,
        latlng: new kakao.maps.LatLng(item.position[1], item.position[0]),
      });
    });
    console.log(`points: ${points}`);

    var bounds = new kakao.maps.LatLngBounds();

    var k, marker;
    for (k = 0; k < points.length; k++) {
      // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
      marker = new kakao.maps.Marker({ position: points[k] });
      marker.setMap(map);

      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(points[k]);
    }

    function setBounds() {
      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
      map.setBounds(bounds);
    }
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "110vh",
        }}
      ></div>
    </>
  );
};

export default React.memo(Map);
