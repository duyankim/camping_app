import axios from "axios";

export async function getPlace(page, mapX, mapY, radius) {
  const response = await axios.get(
    `location/${page}/4/${mapX}/${mapY}/${radius}`
  );
  return response.data.packet;
}
