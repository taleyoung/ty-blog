import React, { SFC } from "react";
import { Card } from "antd";
import style from "./style.less";

const ArticleCard: SFC = () => {
  return (
    <div className={style.container}>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        className={style.card}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default ArticleCard;
