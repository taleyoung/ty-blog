const url = "http://127.0.0.1:7001/api/v1/article";

const getAllArticle = async () => {
  let res = await fetch(url).then(res => res.json());
  console.log("res", res);
  if (res.code === 200) {
    return res.data;
  }
};

export { getAllArticle };
