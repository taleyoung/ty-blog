interface Assets {
  type: string;
  payload: any;
}

const actionSuccess = (type: string, payload: any) => ({
  type,
  payload
});

export const createActionAsync = (
  url: string,
  type: string,
  data: any = {},
  method: string = "get"
) => async (dispatch: (arg: Assets) => Assets) => {
  try {
    const body = method === "get" ? null : JSON.stringify(data);
    let res = await fetch(url, {
      method,
      body
    }).then(res => res.json());
    if (res.code === 200) {
      dispatch(actionSuccess(type, res.data));
      return res.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
