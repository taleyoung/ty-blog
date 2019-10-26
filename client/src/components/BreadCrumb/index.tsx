import React, { SFC } from "react";
import { Breadcrumb } from "antd";
import style from "./style.less";
const { Item } = Breadcrumb;

interface Props {
  list: Array<string>;
}

const BreadCrumb: SFC<Props> = props => (
  <Breadcrumb className={style.container}>
    {props.list.map(item => (
      <Item key={item}>{item}</Item>
    ))}
  </Breadcrumb>
);

export default BreadCrumb;
