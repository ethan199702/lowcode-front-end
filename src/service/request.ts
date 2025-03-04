import { request } from "@antd-core/utils";
import { getCookie } from "@/utils/cookie";

const service = new request("/api");

service.setHeaders({
  authorization: getCookie()
});

export default service;
