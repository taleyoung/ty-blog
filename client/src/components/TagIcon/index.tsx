import React, { SFC } from "react";
import { Icon } from "antd";
import style from "./style.less";

interface IProp {
  type: string;
}

const TagIcon: SFC<IProp> = props => (
  <span className={style.tag}>
    <Icon type={props.type}></Icon>
  </span>
);

export default TagIcon;
