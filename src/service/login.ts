import service from "./request";

export const randomImage = (now: string) =>
  service.get({
    url: `/user/random/${now}`
  });

export const login = (data: any) =>
  service.post(
    {
      url: "/user/login",
      data
    },
    {
      isShow: true
    }
  );
