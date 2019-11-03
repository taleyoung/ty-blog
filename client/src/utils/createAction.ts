import { Dispatch } from "redux";
import { message } from "antd";

export interface Action {
  type: string;
  payload?: any;
}

export interface ReqOption {
  url: string;
  type: string;
  data?: { [key: string]: any };
  method?: string;
  msg?: string;
}

const actionSuccess = (type: string, payload: any) => ({
  type,
  payload
});

export const createActionAsync = (
  url: string,
  type: string,
  method: string = "get",
  data: any = {},
  msg?: string
): Object => async (dispatch: Dispatch) => {
  try {
    const body = method === "get" ? null : JSON.stringify(data);
    let res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body
    }).then(res => res.json());
    if (res.code === 200) {
      dispatch(actionSuccess(type, res.data));
      msg ? message.success(msg) : "";
      return res.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
