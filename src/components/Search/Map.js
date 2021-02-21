import React, { useEffect, useState } from "react";
const { kakao } = window;

const Map = (props) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.9829185, 127.3884379),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    let points = [
      new kakao.maps.LatLng(35.9829185, 127.3884379),
      new kakao.maps.LatLng(33.452671, 126.574792),
      new kakao.maps.LatLng(33.451744, 126.572441),
    ];

    // *지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다*
    let bounds = new kakao.maps.LatLngBounds();

    let i, marker;
    for (i = 0; i < points.length; i++) {
      // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
      marker = new kakao.maps.Marker({ position: points[i] });
      marker.setMap(map);

      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(points[i]);
    }

    function setBounds() {
      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
      map.setBounds(bounds);
    }

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      setLat(latlng.getLat());
      setLng(latlng.getLng());

      console.log(`click위도: ${latlng.getLat()}`);
      console.log(`click경도: ${latlng.getLng()}`);
    });

    // *마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다*
    kakao.maps.event.addListener(map, "dragend", function () {
      // 지도 중심좌표를 얻어옵니다
      let latlng = map.getCenter();

      console.log(`move위도: ${latlng.getLat()}`);
      console.log(`move경도: ${latlng.getLng()}`);
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
