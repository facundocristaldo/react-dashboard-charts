import axios from "axios";
import { SERVER_API } from "./config";

const localInstance = axios.create({
  baseURL: SERVER_API,
  timeout: 120000,
});

export { localInstance };
