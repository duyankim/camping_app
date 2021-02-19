import axios from "axios";
import { SEND_GEO } from "./types";

export const send_geo = () => {
  return { type: SEND_GEO };
};
