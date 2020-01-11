import { message } from "antd";
import { rootUrl } from "@config/api";

const myApi = async (url: string, method?: string, data?: any) => {
  try {
    method = method ? method : "get";
    let res = await fetch(`${rootUrl}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
    if (res.code === 200) {
      return res.data;
    }
  } catch (error) {
    console.log("error", error);
    message.error("请求失败");
  }
};

export default myApi;
