const rootUrl = "http://127.0.0.1:7001/api/v1";

const myApi = async (url: string, option?: Object) => {
  let res = await fetch(`${rootUrl}/${url}`, option).then(res => res.json());
  if (res.code === 200) {
    return res.data;
  }
};

export default myApi;
