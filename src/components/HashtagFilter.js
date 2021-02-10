import styled from "styled-components";
import beach from "../img/beach.svg";
import mountain from "../img/mountain.svg";
import dog from "../img/golden-retriever.svg";
import family from "../img/family.svg";
import fishing from "../img/kayak.svg";
import skates from "../img/skates.svg";
import bike from "../img/bike.svg";
import camping from "../img/camping.svg";

const HashtagBlock = styled.div``;

const HashtagItem = styled.div``;

const hashtags = [
  { icon: beach, text: "#바닷가" },
  { icon: mountain, text: "#산" },
  { icon: dog, text: "#반려동물" },
  { icon: family, text: "#가족과 함께" },
  { icon: fishing, text: "#낚시" },
  { icon: skates, text: "#겨울명소" },
  { icon: bike, text: "#자전거코스" },
  { icon: camping, text: "#불멍" },
];

const HashtagFilter = () => {
  return (
    <HashtagBlock>
      <ul className="hashtag-list">
        <li className="hashtag-list-item">
          {hashtags.map((h) => (
            <HashtagItem key={h.text}>
              <img src={h.icon} alt={h.text} />
              <div className="hashtag-text">{h.text}</div>
            </HashtagItem>
          ))}
        </li>
      </ul>
    </HashtagBlock>
  );
};

export default HashtagFilter;
