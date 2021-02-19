import axios from "axios";

export async function getPlace(pageNo, numOfRows, mapX, mapY, radius) {
  const response = await axios.get(
    `location/${pageNo}/${numOfRows}/${mapX}/${mapY}/${radius}`,
    { withCredentials: true }
  );
  return response.data.packet.items;
}
