import React, { SFC } from "react";
import Preview from "../../components/Preview";
import style from "./style.less";

const Overview: SFC = () => {
  return (
    <div className={style.container}>
      <Preview></Preview>
      <Preview></Preview>
      <Preview></Preview>
      <Preview></Preview>
    </div>
  );
};

export default Overview;
