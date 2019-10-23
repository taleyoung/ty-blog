import React, { SFC } from "react";
import ArticleInfo from "../../components/ArticleInfo";
import style from "./style.less";

const Article: SFC = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>从Material Design到UI设计的思考</div>
        {/* <ArticleInfo></ArticleInfo> */}
        <div className={style.content}>
          说来惭愧，工作3年多，都没有认真的通读Material
          Design，只人云亦云的在某些工作案例中去学习它的操作方式。
          最近再读Material Design，感叹Google设计师的伟大。
          安迪沃霍尔的启蒙老师安东尼奥说“将来会有一天，商业艺术就是真正的艺术。”
          艺术不难得，商业才难得。 Material
          Design和iOS规范是真正的商业艺术，每一个互联网设计师都应该潜心钻研和学习。
          当我们接触报纸媒体时。传统的报纸已经可以满足我们吸收信息，而漂亮精致的杂志让吸收信息这个动作体验更佳，所以当UI出现并开始发展时，每一个人都好奇这小小的屏幕还会泛起怎样的浪花。
          Material
          Design的创新在于创造了一种新的UI体验，即物理现实的科技感，主题即是“纸片魔法”所以它的设计强调层级和纵深，强调以动效模拟现实世界的运动。所以它用很大的篇幅讲“环境”，整个规范的核心围绕“物理现实”严谨且优雅。
          先学会做简单的事，在简单任务的成果之上添加新的活动层级且不改变简单事物。
        </div>
      </div>
    </div>
  );
};

export default Article;
