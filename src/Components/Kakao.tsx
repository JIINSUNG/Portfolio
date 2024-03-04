import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

type KakaoProps = {
  mapId?: number;
  keyword?: string;
};

const Kakao = ({ keyword, mapId }: KakaoProps) => {
  console.log(mapId);
  useEffect(() => {
    let infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    const container = document.getElementById(
      `${mapId ? "map" + mapId : "map"}`
    );
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    if (keyword) {
      // 장소 검색 객체를 생성합니다
      let ps = new window.kakao.maps.services.Places();

      // 키워드로 장소를 검색합니다
      ps.keywordSearch(keyword, placesSearchCB);

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB(data, status, pagination) {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          var bounds = new window.kakao.maps.LatLngBounds();

          for (var i = 0; i < 1; i++) {
            displayMarker(data[i]);
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      }

      function displayMarker(place) {
        var marker = new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        });

        window.kakao.maps.event.addListener(marker, "click", function () {
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      }
    }
  }, [keyword]);

  return (
    <div id={mapId ? "map" + mapId : "map"} className="size-[500px]"></div>
  );
};

export default Kakao;
