import React, { SFC } from "react";
import { Spin } from "antd";
import style from "./index.less";

const Loading: SFC = () => (
  <div className={style.container}>
    <Spin size="large"></Spin>
  </div>
);

export default Loading;
