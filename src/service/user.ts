import service from "./request";

export const get_user_list = (data: any) =>
  service.post({
    url: "/user/list",
    data
  });
