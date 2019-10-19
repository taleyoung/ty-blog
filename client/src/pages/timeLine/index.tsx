import React from "react";
import { Timeline, Icon } from "antd";
import style from "./style.less";

const TimeLine = () => {
  return (
    <div className={style.container}>
      <Timeline mode="alternate" reverse={true}>
        <Timeline.Item>
          2017-09 | 开始入门编程，学习c语言和基本算法{" "}
        </Timeline.Item>
        <Timeline.Item color="green">
          2017-10 | wordpress搭建的博客上线
        </Timeline.Item>
        <Timeline.Item
          dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
        >
          2018-03 ｜ 开始入门前端，学习基本的html/css
        </Timeline.Item>
        <Timeline.Item color="red">
          2018-07 ｜ 负责校科协报名网站前端开发
        </Timeline.Item>
        <Timeline.Item>2018-10 ｜ 星火杯科技竞赛官网前端开发</Timeline.Item>
        <Timeline.Item
          dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
        >
          2019-01 | 管理系统的开发
        </Timeline.Item>
        <Timeline.Item>2019-07 ｜ 字节跳动前端开发实习</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default TimeLine;
