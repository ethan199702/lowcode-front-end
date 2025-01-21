import service from "./request";

export const randomImage = (now: string) =>
  service.get({
    url: `/sys/randomImage/${now}`
  });
